import { Button } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import {SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore'
import ChartsComponent from '../utilities/ChartsComponent'
function GapAnalysis() {
  const gapData=[
    {product:"Classic Salted",order:10,dispached:18},
    {product:"Tingling Tomato",order:20,dispached:26},
    {product:"Masti Masala",order:26,dispached:20},
    {product:"Cream Onion",order:50,dispached:40},
  ]
  const chartData = useMemo(() => ({
    labels: gapData.length ? gapData.map(item => `${item.product}`) : [],
    datasets: [
      {
        label: 'Order ',
        data: gapData.length ? gapData.map(item => item.order) : [],
        backgroundColor: '#907EFF',
        borderWidth: 1,
        maxBarThickness:30,
        
      },
      {
        label: 'Dispatched ',
        data: gapData.length ? gapData.map(item => item.dispached) : [],
        backgroundColor: '#F0AD00',
        maxBarThickness:30,
      },
    ],
  }), []);
  const options = {
    responsive: true,
    aspectRatio: 2,
    plugins: {
      title: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Product', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'No. of Boxes ', 
        },
        beginAtZero: true, 
      },
    },
  };
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
    <div className="flex justify-between flex-wrap">

    <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
        Gap Analysis <span className='font-light' >(SUB CATEGORY)</span>
    </div>
    <div className="sm:flex">

    <Button className='w-36 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4'  iconPosition="end" icon={<SettingOutlined className='  ' />}>Sub Category</Button>
    <Button className='w-32 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4 mt-2 sm:mt-0'  iconPosition="end" icon={<SettingOutlined className='  ' />}>MRP</Button>
    </div>

    </div>
    <div className="">
        
        <ChartsComponent type='bar' data={chartData} options={options} result={chartData} />

    </div>
    </div>
  )
}

export default GapAnalysis