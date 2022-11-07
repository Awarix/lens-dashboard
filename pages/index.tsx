import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import {
  client, searchProfiles, getPublicationsById
} from '../api'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../components/SearchInput'
import Placeholders from '../components/Placeholders'
import Link from 'next/link'

const Home: NextPage = () => {

  const [profiles, setProfiles] = useState([])
  const [loadingState, setLoadingState] = useState('loading')
  const [searchString, setSearchString] = useState('')

  return (
    <div className='flex justify-center w-full mx-auto mt-40'>
      <div className='flex self-center'>
      <SearchInput 
        placeholder='Start searching for a profile'
      />
      <button>Search</button>
      <Link href={'/profiles/profile'}>
        <p>gogog</p>
      </Link>
      </div>
    </div>
  )
}

export default Home
