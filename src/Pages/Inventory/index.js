import { Rate, Avatar, Space, Table, Typography } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { getInventory } from '../../API';

function Inventory() {


  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then(res =>{
      setDataSource(res.products);
      setLoading(false);
    })
  
    
  }, [])
  
  return (
    <>
    <Space size={20} direction='vertical'>   
    <Typography.Title>Welcome to Inventory</Typography.Title>
    <Table
    loading={loading}
    columns={[
        {
          title: "Image",
          dataIndex: "thumbnail",
          render: (link) =>{
            return <Avatar src={link} />;
          },
    
        },
      {
      title: "Title",
      dataIndex: "title"
    },
    {
      title: "Price",
      dataIndex: "price",
      render:(value) =><span>${' '}{value}</span>
    },
    {
      title: "Quantity",
      dataIndex: "quantity"
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage"
    },
    {
      title: "Ratings",
      dataIndex: "rating",
      render: (rating)=>{
        return <Rate  value={rating} allowHalf disabled/>
      }
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

export default Inventory;