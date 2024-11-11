import { Button } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import {SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore'
import ChartsComponent from '../utilities/ChartsComponent'



function Sales() {
const [salesData,setSalesData] =useState([])
const [loading, setLoading] = useState(false);
const chartData = useMemo(() => ({
    labels: salesData.length ? salesData.map(item => `${item.month}/${item.year}`) : [],
    datasets: [
      {
        label: 'Target ',
        data: salesData.length ? salesData.map(item => 15000000) : [],
        backgroundColor: '#FC8C4D',
        borderWidth: 1,
        
      },
      {
        label: 'Achieved ',
        data: salesData.length ? salesData.map(item => item.achieved) : [],
        backgroundColor: '#39CEF3',
      },
    ],
  }), [salesData]);
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
          text: 'Month/Year', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Achieved Sales ', 
        },
        beginAtZero: true, 
      },
    },
  };
const fetchSalesData= async()=>{
    setLoading(true); 
    try {
      const response = await fetchData('d79a0398-90e3-49d4-ad45-c688ef5187ee');
      console.log(response);
      setSalesData(response.sales_snapshot);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    } finally {
      setLoading(false); 
    }
}
console.log(salesData.length ? salesData.map(item => item.achieved) : [])
useEffect(() => {
    if (salesData.length === 0) {
      fetchSalesData();
    }
  }, []);
//   if (loading) return <div>Loading...</div>; 
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
    <div className="flex justify-between flex-wrap">

    <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
        Team Snapshot
    </div>
    <Button className='w-32 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4'  iconPosition="end" icon={<SettingOutlined className='  ' />}>Brand</Button>

    </div>
    <div className="">
        {loading  ? (
            <div>Loading...</div>
        ) : (
            <ChartsComponent type='bar' data={chartData} options={options} result={salesData} />
        )}

    </div>
</div>
  )
}

export default Sales