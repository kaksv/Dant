import { Rate, Avatar, Space, Table, Typography } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { getInventory, getOrders } from '../../API';

function Orders() {


  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then(res =>{
      setDataSource(res.products);
      setLoading(false);
    })
  
    
  }, [])
  
  return (
    <>
    <Space size={20} direction='vertical'>   
    <Typography.Title>Welcome to Orders.</Typography.Title>
    <Table
    loading={loading}
    columns={[
      
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
      title: "Total",
      dataIndex: "total"
    },

    {
      title: "Discounted Price",
      dataIndex: "discountedPrice",
      render: (value) => <span>{value}</span>,
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

export default Orders;