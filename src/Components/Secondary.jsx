
import React, { useEffect, useState } from 'react'
import fetchData from '../api/apiStore'
import ChartsComponent from '../utilities/ChartsComponent'
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
      label: '',
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
      label: '',
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
      label: '',
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
      label: '',
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
          fontSize: 24,
          fontColor: '#333',
        },
    },
  ],
};
const chartData5 = {
  labels: ["Order","Activity"],
  datasets: [
    {
      label: '9:30-10:00 AM',
      data: [64,36],
      backgroundColor: [
        '#F0AD00',
        '#907EFF',
      ],
      borderColor: [
        '#ffffff',
      ],
      borderWidth: 3,
    },
  ],
};
function Secondary() {
  const [SecondaryData, setSecondaryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSecondaryData = async () => {
    setLoading(true);
    try {
      const response = await fetchData("27735c0d-0cf5-4812-8cb0-8fb5a20f14a8");
      console.log(response,"ehereeeeeeeeeeeee");
      setSecondaryData(response);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(SecondaryData.length ? SecondaryData.map((item) => item) : []);
  useEffect(() => {
    if (SecondaryData.length === 0) {
      fetchSecondaryData();
    }
  }, []);
  return (
    <div className='bg-white border-2 border-[#39CEF3] py-4 my-5'>
    <div className="flex justify-between flex-wrap">
    </div>
  
    <div className="sm:flex justify-start gap-28">
      <div className="">
      <div className="uppercase p-2  sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
        Secondary Snapshot
    </div>
      
    <div className="border-2 max-w-md  border-[#39CEF3] p-2 m-5">
      
        <div className="ms:m-2">
        {loading  ? (
            <div>Loading...</div>
        ) : (
            <div className='flex flex-wrap justify-evenly'>
                <div className="w-52">
                  <ChartsComponent type='doughnut' data={chartData5} options={options} result={chartData5} />
                </div>

            </div>
        )}

    </div>
        </div>
        </div>
        <div className="">
        <div className="uppercase p-2   sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline  bg-[#39CEF3] ">
        Drop Size( AOV) 
    </div>
    <div className="border-2 max-w-md   flex justify-center items-center border-[#39CEF3] p-2 m-5">
        <div className="ms:m-2 ">
        {loading  ? (
            <div>Loading...</div>
        ) : (
            <div className='flex flex-wrap justify-evenly '>
                <div className="w-24">
                <p>{"<250"}</p>
            <ChartsComponent type='doughnut' data={chartData1} options={options} result={chartData1} />
                </div>
                <div className="w-24">

                <p>{"250-500"}</p>
            <ChartsComponent type='doughnut' data={chartData2} options={options} result={chartData2} />
                </div>
                <div className="w-24">

                <p>{"500-750"}</p>
            <ChartsComponent type='doughnut' data={chartData3} options={options} result={chartData3} />
                </div>
                <div className="w-24">

                <p>{`>751`}</p>
            <ChartsComponent type='doughnut' data={chartData4} options={options} result={chartData4} />
                </div>
            </div>
        )}

    </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Secondary