import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import {SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore'

function GapAnalysisTeam() {
    const [gapAnalysisData,setgapAnalysisData] =useState([])
    const [loading, setLoading] = useState(false);
    const fetchgapAnalysisData= async()=>{
        setLoading(true); 
        try {
          const response = await fetchData('fb400df7-47bd-49b2-83b2-a1d0c19c48ab');
          console.log(response.team_gap_analysis);
          setgapAnalysisData(response.team_gap_analysis);
        } catch (error) {
          console.error('Error fetching gapAnalysis data:', error);
        } finally {
          setLoading(false); 
        }
    }
    console.log(gapAnalysisData?.length ? gapAnalysisData.map(item => item.achieved) : [])
    useEffect(() => {
        if (gapAnalysisData.length === 0) {
          fetchgapAnalysisData();
        }
      }, []);
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
    <div className="flex justify-between flex-wrap">

    <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
     Gap Analysis (Team)
    </div>
    <Button className='w-32 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4'  iconPosition="end" icon={<SettingOutlined className='  ' />}>Brand</Button>

    </div>
    <div className="max-w-screen-lg mx-auto overflow-x-scroll overflow-hidden scrollbar-custom">
      <table className="w-full m-5 bg-white border border-gray-200">
        <thead>
          <tr className="bg-[#39CEF31A]  border-b border-gray-200">
            <th className="text-center p-3 font-semibold ">Sales Team Name</th>
            <th className="text-center p-3 font-semibold ">Order</th>
            <th className="text-center p-3 font-semibold ">Dispatch</th>
            <th className="text-center p-3 font-semibold ">Gap Analysis</th>
          </tr>
        </thead>
        <tbody>
          {gapAnalysisData?.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-3 text-center">
                {item.first_name} {item.last_name} ({item.designation_name})
              </td>
              <td className="p-3 text-center">{item.ordered}</td>
              <td className="p-3 text-center">{item.dispatch}</td>
              <td className="p-3 text-center">{item.ordered - item.dispatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
  )
}

export default GapAnalysisTeam