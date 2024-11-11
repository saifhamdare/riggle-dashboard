import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import fetchData from '../api/apiStore';
import ProgressBar from '../utilities/ProgressBar';

function Network() {
  const [networkData, setNetworkData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNetworkData = async () => {
    setLoading(true);
    try {
      const response = await fetchData("5576e840-a49b-4f9c-a23d-e84dfbf17a5c");
      setNetworkData(response);
    } catch (error) {
      console.error("Error fetching network data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!networkData) {
      fetchNetworkData();
    }
  }, [networkData]);

  // Helper function to get data safely
  const getValue = (section, key) => {
    return networkData?.[section]?.find((item) => Object.keys(item)[0] === key)?.[key] || 0;
  };
  const channelPartner=['total_cps', 'active_cps', 'zero_order_cps', 'new_cp', 'orders']
const retailer=['total_retailers', 'active_retailers', 'new_retailer', 'orders', 'zero_order_retailers']
const colors = {
  total_cps: '#E42B1F',
  active_cps: '#2EC315',
  zero_order_cps: '#A020F0',
  new_cp: '#F0A020',
  orders: '#20B2F0',
  total_retailers: '#E42B1F',
  active_retailers: '#2EC315',
  zero_order_retailers: '#A020F0',
  new_retailer: '#F0A020',
  orders_retailers: '#20B2F0',
};
  return (
    <div className="bg-white border-2 border-[#39CEF3] py-4 my-5">
      <div className="flex justify-between flex-wrap">
        <div className="uppercase p-2 sm:px-10 sm:py-2 mb-2 sm:mb-0 text-white font-medium inline bg-[#39CEF3]">
          Network Snapshot
        </div>
        <Button className="w-32 flex justify-between border-2 border-[#39CEF3] text-[#39CEF3] mr-4" icon={<SettingOutlined />} >
          Today
        </Button>
      </div>

      {/* Primary Section */}
      <div className="sm:flex justify-evenly mt-4">
        <div className="border-2 max-w-md w-full border-[#39CEF3] p-2 sm:p-4 ms:m-2">
          <div className="border-b-2 border-[#d2d2d2]">
            <h3 className="text-base font-semibold">Primary (Channel Partner)</h3>
          </div>
          <div className="max-w-sm mx-auto mt-2 ">
            {channelPartner.map((key, index) => (
              <div className="grid grid-cols-12 gap-1 items-center " key={index}>
              {/* <div className="flex justify-center items-center" key={index}> */}
                <p className="font-medium col-span-4">{key.replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase())}:</p>
                <ProgressBar progress={getValue('primary', key)} color={colors[key]} />
                <p className="font-medium">{getValue('primary', key)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Section */}
        <div className="border-2 max-w-md w-full border-[#39CEF3] p-2 sm:p-4 ms:m-2 mt-4">
          <div className="border-b-2 border-[#d2d2d2]">
            <h3 className="text-base font-semibold">Secondary (Retailers)</h3>
          </div>
          <div className="max-w-sm mx-auto mt-2">
            {retailer.map((key, index) => (
              <div className="grid grid-cols-12 gap-1 items-center" key={index}>
                <p className="font-medium  col-span-4 ">{key.replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase())}:</p>
                <ProgressBar progress={getValue('secondary', key)} color={colors[key]} />
                <p className="font-medium">{getValue('secondary', key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
