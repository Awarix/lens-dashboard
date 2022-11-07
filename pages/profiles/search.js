import React, { useState, useEffect } from 'react'
import { client, searchProfiles, recommendedProfiles, getPublications } from '../../api'
import SearchInput from '../../components/SearchInput'

const search = () => {
    const [profiles, setProfiles] = useState([])
  const [loadingState, setLoadingState] = useState('loading')
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    getRecommendedProfiles() 
  }, [])

  async function getRecommendedProfiles() {
    try {
      const urqlClient = await client()
      const response = await urqlClient.query(recommendedProfiles).toPromise()
      const profileData = await Promise.all(response.data.recommendedProfiles.map(async profile => {
        const pub = await urqlClient.query(getPublications, { id: profile.id, limit: 1 }).toPromise()
        profile.publication = pub.data.publications.items[0]
        profile.backgroundColor = generateRandomColor()
        return profile
      }))
      setProfiles(profileData)
      setLoadingState('loaded')
    } catch (err) {
      console.log('error fetching recommended profiles: ', err)
    }
  }

  async function searchForProfile() {
    if (!searchString) return
    try {
      const urqlClient = await client()
      const response = await urqlClient.query(searchProfiles, {
        query: searchString, type: 'PROFILE'
      }).toPromise()
      const profileData = await Promise.all(response.data.search.items.map(async profile => {
        const pub = await urqlClient.query(getPublications, { id: profile.profileId, limit: 1 }).toPromise()
        profile.id = profile.profileId
        profile.publication = pub.data.publications.items[0]
        return profile
      }))

      setProfiles(profileData)
    } catch (err) {
      console.log('error searching profiles...', err)
    }
    console.log(profiles)
  }


  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      searchForProfile()
    }
  }
  
  return (
    <div>
        <SearchInput 
        placeholder='Start searching for a profile'
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown} 
        />
        <button onClick={searchForProfile}>SEARCH PROFILES</button>
        <div>
        {
           loadingState === 'loading' 
        }
        {
          profiles.map((profile, index) => (
            <Link href={`/profile/${profile.id}`} key={index}>
              <a>
                <div>
                  <div>
                    {
                      profile.picture && profile.picture.original ? (
                      <Image
                        src={profile.picture.original.url}
                        width="42px"
                        height="42px"
                      />
                      ) : (
                        <div
                        />
                      )
                    }
                    
                    <div>
                      <h3 >{profile.name}</h3>
                      <p>{profile.handle}</p>
                    </div>
                  </div>
                  <div>
                    <p>{trimString(profile.publication?.metadata.content, 200)}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default search