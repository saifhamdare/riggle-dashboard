import { Button } from 'antd'
import React from 'react'
import {SettingOutlined,DownloadOutlined} from '@ant-design/icons'
function Filter() {
  return (
    <div className='flex flex-wrap py-7 justify-between'>
        <div className="flex flex-wrap gap-2 ">
            <Button className='w-32 flex justify-between border-2 border-[#A6A6A640]' iconPosition="end" icon={<SettingOutlined />}>Month</Button>
            <Button className='w-32 flex justify-between border-2 border-[#A6A6A640]' iconPosition="end" icon={<SettingOutlined />}>State</Button>
            <Button className='w-32 flex justify-between border-2 border-[#A6A6A640]' iconPosition="end" icon={<SettingOutlined />}>City</Button>

        </div>
        <div className="text-white mt-3 sm:mt-0">
            <Button className=' flex justify-between text-white text-base bg-[#39CEF3] hover:bg-[#1ac4ef]' iconPosition="start" icon={<DownloadOutlined  className='text-xl'/>}>Target Report</Button>

        </div>
    </div>
  )
}

export default Filter