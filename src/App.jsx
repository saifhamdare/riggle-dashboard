import React, { useState } from 'react';
import {  UserOutlined ,MenuUnfoldOutlined,MenuFoldOutlined ,VideoCameraOutlined,UploadOutlined,BellOutlined,PlayCircleOutlined, AimOutlined, LikeOutlined, CodeSandboxOutlined, TrophyOutlined} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import Home from './Page/Home';
const { Header, Content, Sider } = Layout;


function App() {

  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
<Layout>
      <Header
        className='flex items-center justify-between bg-white px-4'
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
          
      >
        <span className='flex items-center'>
       <div className=" w-20 sm:w-40">
        <img className='w-full' loading="lazy" width={80} src="https://riggleapp.in/static/media/newriggle4.bf97651b8105bec8fa33.png"  alt="" />
       </div>
  
       <Button
            type="text"
            icon={collapsed ?
               <MenuUnfoldOutlined className='size-10 text-3xl' 
                />
             : <MenuFoldOutlined className='size-10 text-3xl'  />
            }
             className='flex items-center justify-center'
            onClick={() => setCollapsed(!collapsed)}
          />
          </span>
          <span className="flex  sm:gap-10 items-center">

      <PlayCircleOutlined className='text-xl sm:text-2xl size-10' 

         />
      <BellOutlined className='text-xl sm:text-2xl size-10 ' 
      />
      <span className='border-b-4 border-[#39CEF3] flex  items-center' >
      <div className=" w-12 sm:w-14">
        <img  className='text-xl m-auto sm:text-2xl size-10 border-2 border-[#39CEF3] rounded-full' src="https://i.ibb.co/2yYLBBN/avatar.png" alt="" />
      </div>
      <span>Saif Hamdare</span>
      </span>
          </span>
      </Header>
      <Layout>
      <Sider className='bg-white mt-4 '  trigger={null} collapsible collapsed={collapsed}>
        
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <CodeSandboxOutlined className=' text-3xl'  />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <TrophyOutlined className=' text-3xl' />,
              label: 'Brands',
            },
            {
              key: '3',
              
              icon: <UserOutlined className=' text-3xl'  />,
              label: 'Sales Person',
            },
            {
              key: '4',
              
              icon: <AimOutlined className=' text-3xl'  />,
              label: 'Target',
            },
            {
              key: '5',
              icon: <LikeOutlined className=' text-3xl' />,
              label: 'Channel Partners',
            },
          ]}
        />

      </Sider>

   
          <Content
  
            className='m-4  '
          >
            <Home/>
          </Content>
      </Layout>
    </Layout>

    </>
  )
}

export default App
