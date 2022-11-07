import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import PieC from '../../components/PieC'
import Widget from '../../components/Widget'
import Lchart from '../../components/Lchart'
import Achart from '../../components/Achart'
import Bchart from '../../components/Bchart'
import Rchart from '../../components/Rchart'

const Profile = () => {
  const [profile, setProfile] = useState()
  const [connected, setConnected] = useState()
  const [publications, setPublications] = useState([])
  const [account, setAccount] = useState('')
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      fetchProfile()
    }
    checkConnection()
  }, [id])

  async function checkConnection() {
    const provider = new ethers.providers.Web3Provider(
      (window).ethereum
    )
    const addresses = await provider.listAccounts();
    if (addresses.length) {
      setConnected(true)
    } else {
      setConnected(false)
    }
  }

  async function fetchProfile() {
    console.log({ id })
    try {
      const returnedProfile = await client.query(getProfile, { id }).toPromise();

      const profileData = returnedProfile.data.profile
      const picture = profileData.picture
      if (picture && picture.original && picture.original.url) {
        if (picture.original.url.startsWith('ipfs://')) {
          let result = picture.original.url.substring(7, picture.original.url.length)
          profileData.picture.original.url = `http://lens.infura-ipfs.io/ipfs/${result}`
        }
      }
      setProfile(profileData)

      const pubs = await client.query(getPublications, { id, limit: 50 }).toPromise()
      setPublications(pubs.data.publications.items)
    } catch (err) {
      console.log('error fetching profile...', err)
    }
  }

  async function connectWallet() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    })
    console.log('accounts: ', accounts)
    accounts[0]
    setAccount(account)
    setConnected(true)
  }

  function getSigner() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider.getSigner();
  }

  async function followUser() {
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      getSigner()
    )

    try {
      const tx = await contract.follow([id], [0x0])
      await tx.wait()
      console.log(`successfully followed ... ${profile.handle}`)
    } catch (err) {
      console.log('error: ', err)
    }
  }

  if (!profile) return null
  
  return (
    <Layout>
      <Head>
        {/* <title>{profile ? profile.handle : "Lensboard"}</title> */}
      </Head>
      <section className='flex flex-col w-full shadow'>
        <div className='w-full h-60 border border-indigo-600 text-center'>Cover picture</div>
        <div className='flex flex-row mx-4 -my-16'>
            <div className='bg-black rounded-full h-32 w-32'>img</div>
            <div className='flex flex-col px-4 py-4'>
                <span>views</span>
                <h1>name</h1>
                <h2>handle</h2>
            </div>
        </div>
        <section className='mt-16'>
            <div className='flex flex-row gap-5 px-4 py-4'>
                <Widget type="followers" value="321"/>
                <Widget type="following" value="121"/>
                <Widget type="acivity" value="13"/>
                <Widget type="posts" value="6"/>
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

export default Profile