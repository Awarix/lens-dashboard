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