import React from 'react'

import { Filter, Sales, Login, Teams, Network, GapAnalysis, Insights, Secondary, SecondaryCoverage, GapAnalysisTeam, Payment } from '../Components';

function Home() {
  return (
    <div  >
   <Filter/>
        <Sales/>
           <Teams/>
        <Login/> 
        <Network/>
        <Insights/>
        <GapAnalysis/>
        <Secondary/>
        <SecondaryCoverage/>
        <GapAnalysisTeam/>
        <Payment/>
    </div>
  )
}

export default Home