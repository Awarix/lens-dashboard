import React, { useState } from 'react'
import Head from 'next/head'
import { client, getGlobalStats } from '../../api'
import Layout from '../../components/Layout'
import Achart from '../../components/Achart'
import Widget from '../../components/Widget'
import PieC from '../../components/PieC'
import Bchart from '../../components/Bchart'
import Rchart from '../../components/Rchart'
import SearchInput from '../../components/SearchInput'



const global = () => {
  const [fromTime, setFromTime] = useState (1670871000)
  const [toTime, setToTime] = useState (1670871012)
  const [global, setGlobal] = useState([])
  const [oneMonth, setOneMonth] = useState(0)

  const variables = {
    fromTimestamp: 1667250000,
    toTimestamp: 1669842000
  };
  
  client.query({
    query: getGlobalStats,
    variables: variables
  });


  async function getStats () {
  const response = await client.query(getGlobalStats, {fromTimestamp: oneMonth, toTimestamp: toTime, sources: "Lenster" }).toPromise()
  setGlobal(response.data.globalProtocolStats)
  console.log('Lens example data: ', response)
}


(async () => {
  await getStats();
  setOneMonth(toTime - 2629743)
  console.log(oneMonth)
})();

// toTime shouldn't update, until we want to provide live charts. Should be fixed, until user refresh page.
  

  return (
      <Layout>
          <section className='flex flex-col w-full shadow'>
            <section className='m-16 flex flex-row justify-center gap-5'>
              <p>Set period:</p>
              <SearchInput className='w-32' placeholder='fromTime'/>
              <SearchInput className='w-32' placeholder='toTime'/>
              <button>Submit</button>
            </section>
            <section className='mt-16'>
                <div className='flex flex-row gap-5 px-4 py-4'>
                    <Widget type="Total Posts" value={global.totalPosts}/>
                    <Widget type="Total Comments" value={global.totalComments}/>
                    <Widget type="Total Mirrors" value={global.totalMirrors}/>
                    <Widget type="Total Collects" value={global.totalCollects}/>
  
                </div>
            </section>
            <section className='mt-4 mb-8'>
              <div className='flex'>
                <Achart 
                totalProfiles={global.totalProfiles}
                />
              </div>
            </section>
            <section className='mt-4 mb-8'>
              <div className='flex gap-10 flex-row'>
                <div className='flex flex-grow'>
                  <Achart />
                </div>
                <div className='flex-none justify-evenly w-96 h-80 flex-col gap-5'>
                  <PieC name="Total Posts" value={global.totalPosts}/>
                  <PieC name="Total Comments" value={global.totalComments}/>
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

export default global