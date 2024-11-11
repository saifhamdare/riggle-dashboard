import { Button } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import {SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore'
function Insights() {
  const [insightsData, setinsightsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchinsightsData = async () => {
    setLoading(true);
    try {
      const response = await fetchData("056d103a-798d-4193-b5a8-2ac7790dfd19");
      console.log(response.insight_snapshot_data);
      setinsightsData(response.insight_snapshot_data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(insightsData.length ? insightsData.map((item) => item) : []);
  useEffect(() => {
    if (insightsData.length === 0) {
      fetchinsightsData();
    }
  }, []);
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
    <div className="flex justify-between flex-wrap">

    <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
        Insights Snapshot
    </div>
    <Button className='w-32 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4'  iconPosition="end" icon={<SettingOutlined className='  ' />}>Today</Button>

    </div>
    <div className="tab-container flex justify-evenly flex-wrap">
     <div className="max-w-xs w-full" >
        <div className="tab p-1 m-2 border-[#39CEF3] border-2 h-96 overflow-y-scroll overflow-hidden scrollbar-custom">
          <h3 className="bg-[#39CEF3] text-white text-base text-center py-2 rounded-md">insights PERFORMANCE</h3>
          {insightsData.top_10_products && insightsData.top_10_products.map((item,idx)=>(

            <div key={idx} className="insights-member-tab sm:grid grid-cols-12 items-center border-b-2 border-slate-200 p-2  justify-between">
        
            <h4 className=''>{idx+1}</h4>
            <div className="avatar-container w-12  col-span-3 rounded-full">
              <picture>
                <source srcSet={item.image} />
                <img className="w-full rounded-full h-12 border-2 border-slate-500" loading="lazy" src={'https://i.ibb.co/2yYLBBN/avatar.png'} alt="" />
              </picture>
            </div>
            <div className=" col-span-8">
              <div className="employee-info sm:flex font-medium text-sm gap-3">
                <h2 className="text-sm">{item.name} </h2>
                {/* <h4 className=" text-sm ">( {item.quantity} )</h4> */}
              </div>
              <div className="sales-info sm:flex text-[8px]  justify-around">
                <h2 className=" text-[10px] ">set Count: {item.quantity}</h2>
                <h4 className=" text-[10px] ">Value :{item.value}</h4>
              </div>
            </div>
            {/* <div className="">
                <div style={{boxShadow:'0px 4px 4px 0px #FFFFFF80 inset'}} className="bg-[#907EFF] border-2 w-7 h-7 border-[#907EFF] text-white text-[7px] px-1 py-2 rounded-full text-center">{item.achievement} %</div>
            </div> */}
          </div>
          )) }
        </div>
        <div className="flex justify-end ">
            <p className="border-b-2 text-[#39CEF3] border-[#39CEF3] mr-4">View All</p>
          </div>
        </div> 
     <div className="max-w-xs w-full" >
        <div className="tab p-1 m-2 border-[#39CEF3] border-2 h-96 overflow-y-scroll overflow-hidden scrollbar-custom">
          <h3 className="bg-[#39CEF3] text-white text-base text-center py-2 rounded-md   ">Insights PERFORMANCE</h3>
          {insightsData.top_10_distributors && insightsData.top_10_distributors.map((item,idx)=>(

            <div key={idx} className="insights-member-tab sm:grid grid-cols-12 items-center border-b-2 border-slate-200 p-2  justify-between">
        
            <h4 className=''>{idx+1}</h4>
            <div className="avatar-container w-12  col-span-3 rounded-full">
              <picture>
                <source srcSet={item.logo} />
                <img className="w-full rounded-full h-12 border-2 border-slate-500" loading="lazy" src={'https://i.ibb.co/2yYLBBN/avatar.png'} alt="" />
              </picture>
            </div>
            <div className=" col-span-7">
              <div className="employee-info sm:flex font-medium text-sm gap-3">
                <h2 className="text-sm">{item.name} </h2>
              </div>
              <div className="sales-info sm:flex text-[8px]  justify-around">
                <h2 className=" text-[10px] ">Target: {item.target}</h2>
                <h4 className=" text-[10px] ">Achieved :{item.achievement}</h4>
              </div>
            </div>
            <div className="">
                <div style={{boxShadow:'0px 4px 4px 0px #FFFFFF80 inset'}} className="bg-[#907EFF] border-2 w-7 h-7 border-[#907EFF] text-white text-[7px] px-1 py-2 rounded-full text-center">{item.achievement ? (Math.floor(item.achievement /100)): 0} %</div>
            </div>
          </div>
          )) }
        </div>
        <div className="flex justify-end ">
            <p className="border-b-2 text-[#39CEF3] border-[#39CEF3] mr-4">View All</p>
          </div>
        </div> 
     <div className="max-w-xs w-full" >
        <div className="tab p-1 m-2 border-[#39CEF3] border-2 h-96 overflow-y-scroll overflow-hidden scrollbar-custom">
          <h3 className="bg-[#39CEF3] text-white text-base text-center py-2 rounded-md   ">Insights PERFORMANCE</h3>
          {insightsData.top_10_activations && insightsData.top_10_activations.map((item,idx)=>(

            <div key={idx} className="insights-member-tab sm:grid grid-cols-12 items-center border-b-2 border-slate-200 p-2  justify-between">
        
            <h4 className=''>{idx+1}</h4>
            <div className="avatar-container w-12  col-span-3 rounded-full">
              <picture>
                <source srcSet={item.logo} />
                <img className="w-full rounded-full h-12 border-2 border-slate-500" loading="lazy" src={'https://i.ibb.co/2yYLBBN/avatar.png'} alt="" />
              </picture>
            </div>
            <div className=" col-span-7">
              <div className="employee-info sm:flex font-medium text-sm gap-3">
                <h2 className="text-sm">{item.name} </h2>
              </div>
              <div className="sales-info sm:flex text-[8px]  justify-around">
                <h2 className=" text-[10px] ">Target: {item.target}</h2>
                <h4 className=" text-[10px] ">Achieved :{item.achievement}</h4>
              </div>
            </div>
            <div className="">
                <div style={{boxShadow:'0px 4px 4px 0px #FFFFFF80 inset'}} className="bg-[#907EFF] border-2 w-7 h-7 border-[#907EFF] text-white text-[7px] px-1 py-2 rounded-full text-center">{item.achievement ? (Math.floor(item.achievement /100)): 0} %</div>
            </div>
          </div>
          )) }
      {insightsData?.top_10_activations?.length==0&&<div className='mt-10 text-center' >No Data Found</div>}
        </div>
        <div className="flex justify-end ">
            <p className="border-b-2 text-[#39CEF3] border-[#39CEF3] mr-4">View All</p>
          </div>
        </div> 
   
    </div>
    </div>
  )
}

export default Insights