import { Button, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import {SettingOutlined} from '@ant-design/icons'
import fetchData from '../api/apiStore';
import ChartsComponent from '../utilities/ChartsComponent';
const ProgressBar = ({ progress,color }) => {
    return (
      <div className='' style={{ width: '100%', backgroundColor: '', borderRadius: '8px' }}>
        <div
          style={{
            height: '10px',
            width: `${progress}%`,
            backgroundColor: color,
            borderRadius: '8px',
            transition: 'width 0.2s ease-out',
          }}
        />
      </div>
    );
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  const chartData1 = {
    labels: [],
    datasets: [
      {
        label: 'Before 10:30AM',
        data: [40,60],
        backgroundColor: [
          '#39CEF3',
          '#d3c3c3',
        ],
        borderColor: [
          '#ffffff',
        ],
        borderWidth: 3,
      },
    ],
  };
  const chartData2 = {
    labels: [],
    datasets: [
      {
        label: '9:30-10:00 AM',
        data: [64,36],
        backgroundColor: [
          '#F0AD00',
          '#d3c3c3',
        ],
        borderColor: [
          '#ffffff',
        ],
        borderWidth: 3,
      },
    ],
  };
  const chartData3 = {
    labels: [],
    datasets: [
      {
        label: '10:00-10:30 AM',
        data: [79,21],
        backgroundColor: [
          '#907EFF',
          '#d3c3c3',
        ],
        borderColor: [
          '#ffffff',
        ],
        borderWidth: 3,
      },
    ],
  };
  const chartData4 = {
    labels: [],
    datasets: [
      {
        label: 'After 10:30AM',
        data: [97,3],
        backgroundColor: [
          '#B8F40E',
          '#d3c3c3',
        ],
        borderColor: [
          '#ffffff',
        ],
        borderWidth: 3,
        centerText: {
            text: 'Hello', // Text to display in the center
            fontSize: 24,
            fontColor: '#333',
          },
      },
    ],
  };
  const timeArray=[
{label:"Before 10:30AM",value:1},
{label:"9:30-10:00 AM",value:2},
{label:"10:00-10:30 AM",value:3},
{label:"After 10:30AM",value:4},
]
function Login() {
    const [loginData, setLoginData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchLoginData = async () => {
      setLoading(true);
      try {
        const response = await fetchData("d2b28be4-a471-44cb-a0d2-02b86986cb4d");
        console.log(response);
        setLoginData(response);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setLoading(false);
      }
    };
    console.log(loginData.length ? loginData.map((item) => item) : []);
    useEffect(() => {
      if (loginData.length === 0) {
        fetchLoginData();
      }
    }, []);
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
        <div className="flex justify-between flex-wrap">

        <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
            Login Snapshot
        </div>
        <Button className='w-32 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4'  iconPosition="end" icon={<SettingOutlined className='  ' />}>Today</Button>

        </div>
        <div className="sm:flex justify-evenly p-2 ">
        <div className="border-2 max-w-md w-full border-[#39CEF3] p-2 sm:p-4 ms:m-2">
            <div className="border-b-2 border-[#d2d2d2]">
                <h1 className='text-3xl sm:text-5xl font-semibold' >{loginData.total_user}</h1>
                <h3 className='text-xl font-semibold'>Attandance</h3>
            </div>
            <div className="max-w-xs mx-auto">
                <div className="flex justify-center items-center">
                    <p className=' font-medium w-24'>Live :</p>
               {loginData.active_users    && <ProgressBar  progress={loginData.active_users}  color={"#2EC315"}/>}
             <p className=' font-medium'>{loginData.active_users}</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className=' font-medium w-24'>Offline : </p>

            {loginData.inactive_users &&        <ProgressBar  progress={loginData.inactive_users} color={"#E42B1F"}/>}
                    <p className=' font-medium '>{loginData.inactive_users}</p>
                </div>
            </div>
        </div>
        <div className="border-2 max-w-md w-full border-[#39CEF3] p-2 ">
        <div className="ms:m-2">
        {loading  ? (
            <div>Loading...</div>
        ) : (
            <div className='flex flex-wrap justify-evenly'>
                <div className="w-24">
                <Select defaultValue={1} options={timeArray}/>
            <ChartsComponent type='doughnut' data={chartData1} options={options} result={chartData1} />
                </div>
                <div className="w-24">

                <Select defaultValue={2} options={timeArray}/>
            <ChartsComponent type='doughnut' data={chartData2} options={options} result={chartData2} />
                </div>
                <div className="w-24">

                <Select defaultValue={3} options={timeArray}/>
            <ChartsComponent type='doughnut' data={chartData3} options={options} result={chartData3} />
                </div>
                <div className="w-24">

                <Select defaultValue={4} options={timeArray}/>
            <ChartsComponent type='doughnut' data={chartData4} options={options} result={chartData4} />
                </div>
            </div>
        )}

    </div>
        </div>
        </div>
    </div>
  )
}

export default Login