import React from 'react'
import Head from 'next/head'
import { client, getGlobalStats } from '../../api'
import Layout from '../../components/Layout'
import Achart from '../../components/Achart'
import Widget from '../../components/Widget'
import PieC from '../../components/PieC'
import Bchart from '../../components/Bchart'
import Rchart from '../../components/Rchart'



const global = () => {
  const fromTime = 1667250000
  const toTime = 1669842000

  async function getStats () {
  const response = await client.query(getGlobalStats, {fromTimestamp: fromTime, toTimestamp: toTime }).toPromise()
  console.log('Lens example data: ', response)
}

(async () => {
  await getStats();
})();
  return (
      <Layout>
          <section className='flex flex-col w-full shadow'>
            <section className='mt-16'>
                <div className='flex flex-row gap-5 px-4 py-4'>
                    <Widget type="Total Posts" />
                    <Widget type="Total Comments" />
                    <Widget type="Total Mirrors" />
                    <Widget type="Total Collects" />
  
                </div>
            </section>
            <section className='mt-4 mb-8'>
              <div className='flex'>
                <Achart 
                totalFollowers='totalFollowers'
                />
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

export default global