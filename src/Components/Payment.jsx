import { Button, Collapse } from 'antd'
import React, { useEffect, useState } from 'react'
import {MinusOutlined, PlusOutlined, SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore'

function Payment() {
    const [paymentData,setpaymentData] =useState([])
const [loading, setLoading] = useState(false);
const [activeKey, setActiveKey] = useState(['1']); 
const fetchpaymentData= async()=>{
    setLoading(true); 
    try {
      const response = await fetchData('188f23d4-2281-4ced-bfca-ba833524e290');

      setpaymentData(response.data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    } finally {
      setLoading(false); 
    }
}

const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  const renderHeader = (title, key) => (
    <div className="flex justify-between items-center">
      <span>{title}</span>
      {activeKey.includes(key) ? <MinusOutlined className='text-white font-bold' /> : <PlusOutlined className='text-white font-bold'/>}
    </div>
  );
useEffect(() => {
    if (paymentData.length === 0) {
      fetchpaymentData();
    }
  }, []);
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
    <div className="flex justify-between flex-wrap">

    <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
 Payment SnapShot
    </div>

    </div>
    <div className="m-4">
    <Collapse  activeKey={activeKey} onChange={handlePanelChange}>
  <Collapse.Panel showArrow={false} className='bg-[#39CEF3] mb-2' header={renderHeader("Week 1", "1")} key="1">
  <div className="max-w-screen-lg mx-auto overflow-x-scroll overflow-hidden scrollbar-custom">
      <table className="w-full m-5 bg-white border border-gray-300 overflow-x-scroll overflow-hidden scrollbar-custom">
        <thead>
          <tr className="  border border-gray-300 ">
            <th className="text-center p-3 font-semibold border border-gray-300 ">Date</th>
            <th className="text-center p-3 font-semibold border border-gray-300 ">Payment Planned (Rs)</th>
            <th className="text-center p-3 font-semibold border border-gray-300 ">Payment Received (Rs)</th>
            <th className="text-center p-3 font-semibold border border-gray-300 ">View</th>
          </tr>
        </thead>
        <tbody>
          {paymentData?.map((item, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="p-3 text-center border border-gray-300">
                {item.date} 
              </td>
              <td className="p-3 text-center border border-gray-300">{item.payment_planned}</td>
              <td className="p-3 text-center border border-gray-300">{item.payment_recieved}</td>
              <td className="p-3 text-center border border-gray-300">Icon</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapse.Panel>
  <Collapse.Panel showArrow={false} className='bg-[#39CEF3] mb-2' header={renderHeader("Week 2", "2")} key="2">
    <p>No Data</p>
  </Collapse.Panel>
  <Collapse.Panel showArrow={false} className='bg-[#39CEF3] mb-2' header={renderHeader("Week 3", "3")} key="3">
    <p>No data</p>
  </Collapse.Panel>
  <Collapse.Panel showArrow={false} className='bg-[#39CEF3] mb-2' header={renderHeader("Week 4", "4")} key="4">
    <p>No data</p>
  </Collapse.Panel>
</Collapse>
</div>
</div>
  )
}

export default Payment