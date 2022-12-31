import React, { useState } from 'react'
import { getGlobalStats } from '../../api's

const global2 = () => {

    const [global, setGlobal] = useState([])

    const variables = {
        fromTimestamp: 1667250000,
        toTimestamp: 1669842000
      };
      
      client.query({
        query: getGlobalStats,
        variables: variables
      });
  return (
    <div>{global.totalPosts}</div>
  )
}

export default global2