import { Rate, Avatar, Space, Table, Typography } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { getCustomers } from '../../API';

function Customers() {


  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then(res =>{
      setDataSource(res.users);
      setLoading(false);
    })
  
    
  }, [])
  
  return (
    <>
    <Space size={20} direction='vertical'>   
    <Typography.Title>The Customers.</Typography.Title>
    <Table
    loading={loading}
    columns={[
        {
          title: "Image",
          dataIndex: "image",
          render: (link) =>{
            return <Avatar src={link} />;
          },
    
        },
      {
      title: "First Name",
      dataIndex: "firstName"
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
     
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Phone Number",
      dataIndex: "phone"
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
     
    },
   
  
    
    ]}
    dataSource={dataSource}
    pagination={{
      pageSize: 10,
    }}
    ></Table>
    </Space>
    </>
  )
}

export default Customers;