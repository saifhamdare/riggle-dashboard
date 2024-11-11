import React from 'react'

import { Filter, Sales, Login, Teams } from '../Components';
function Home() {
  return (
    <div  >
        <Filter/>
        <Sales/>
        <Teams/>
        <Login/>
    </div>
  )
}

export default Home