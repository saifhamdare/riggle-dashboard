import { Button } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import {SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore'
import ChartsComponent from '../utilities/ChartsComponent'
import { MONTHS_LIST } from '../utilities/constants'

function SecondaryCoverage() {
    const [salesData,setSalesData] =useState([])
    const [loading, setLoading] = useState(false);
    const chartData = useMemo(() => ({
        labels: salesData.length ? salesData.map(item => `${MONTHS_LIST[item.month]}`) : [],
        datasets: [
          {
            label: 'Target ',
            data: salesData.length ? salesData.map(item => item.orders) : [],
            backgroundColor: '#FC8C4D',
            borderWidth: 1,
          maxBarThickness:30,
           
            
          },
          {
            label: 'Achieved ',
            data: salesData.length ? salesData.map(item => item.achieved) : [],
            backgroundColor: '#39CEF3',
          maxBarThickness:30,
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
          legend:{
              position:"right"
            }
        },
        scales: {
          x: {
            title: {
              display: true,
              width:10
            },
          },
          y: {
            title: {
              display: true,
            },
            beginAtZero: true, 
          },
        },
      };
    const fetchSalesData= async()=>{
        setLoading(true); 
        try {
          const response = await fetchData('73c7610e-5ceb-47f1-91a4-0e1f6fab1e5d');
          console.log(response.secondary_coverage);
          setSalesData(response.secondary_coverage);
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
      return (
        <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
        <div className="flex justify-between flex-wrap">
    
        <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
            Secondary Coverage
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

export default SecondaryCoverage