import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { client, getProfile, getPublications } from '../../api'
import Head from 'next/head'
import Layout from '../../components/Layout'
import PieC from '../../components/PieC'
import Widget from '../../components/Widget'
import Lchart from '../../components/Lchart'
import Achart from '../../components/Achart'
import Bchart from '../../components/Bchart'
import Rchart from '../../components/Rchart'
import Image from 'next/image'

const Handle = () => {

    const [profile, setProfile] = useState()
    const [publications, setPublications] = useState([])
    const router = useRouter()
    const { handle } = router.query

    useEffect(() => {
        if (handle) {
          console.log(profile)
          fetchProfile()
        }
      }, [handle])

      async function fetchProfile() {
        try {
          /* fetch the user profile using their handle */
          const returnedProfile = await client.query(getProfile, { handle }).toPromise();
          const profileData = returnedProfile.data.profile
          /* format their picture if it is not in the right format */
          const picture = profileData.picture
          if (picture && picture.original && picture.original.url) {
            if (picture.original.url.startsWith('ipfs://')) {
              let result = picture.original.url.substring(7, picture.original.url.length)
              profileData.picture.original.url = `http://lens.infura-ipfs.io/ipfs/${result}`
            }
          }
          setProfile(profileData)
                /* fetch the user's publications from the Lens API and set them in the state */
          const pubs = await client.query(getPublications, { id: profileData.id, limit: 50 }).toPromise()
          setPublications(pubs.data.publications.items)
        } catch (err) {
          console.log('error fetching profile...', err)
        }
      }

      if (!profile) return null

      return (
        <Layout>
          <Head>
            {/* <title>{profile ? profile.handle : "Lensboard"}</title> */}
          </Head>
          <section className='flex flex-col w-full shadow'>
            <img className='w-full h-60 border border-indigo-600 text-center' src={profile.coverPicture?.original?.url}></img>
            <div className='flex flex-row mx-4 -my-16'>
                <img className='bg-black rounded-full h-32 w-32' src={profile.picture?.original?.url}></img>
                <div className='flex flex-col px-4 py-4'>
                    <span>views</span>
                    <h1>{profile.name}</h1>
                    <h2>{profile.handle}</h2>
                </div>
            </div>
            <section className='mt-16'>
                <div className='flex flex-row gap-5 px-4 py-4'>
                    <Widget type="followers" value={profile.stats.totalFollowers}/>
                    <Widget type="following" value={profile.stats.totalFollowing}/>
                    <Widget type="acivity" value={profile.stats.totalPublications}/>
                    <Widget type="posts" value={profile.stats.totalPosts}/>
                </div>
            </section>
            <section className='mt-4 mb-8'>
              <div className='flex gap-10 flex-row justify-around shadow'>
                <div className='flex-none justify-evenly w-96 h-80 flex-col gap-5'>
                  <PieC />
                  <PieC />
                </div>
                <div className='flex flex-grow'>
                  <Lchart />
                </div>
              </div>
            </section>
            <section className='mt-4 mb-8'>
              <div className='flex gap-10 flex-row'>
                
                <div className='flex flex-grow'>
                  <Achart />
                </div>
                <div className='flex-none justify-evenly w-96 h-80 flex-col gap-5'>
                  <PieC />
                  <PieC />
                </div>
              </div>
            </section>
            <section className='mt-4 mb-8'>
              <div className='flex gap-8 flex-row align-center justify-around'>
                <div className=''>
                  <Bchart />
                </div>
                <div className=''>
                  <Rchart />
                </div>
              </div>
            </section>
          </section>
        </Layout>
      )
}

export default Handle