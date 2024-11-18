import React, { useEffect, useState } from 'react'
import { Card, Space, Statistic, Table, Typography } from 'antd';
import { DollarCircleFilled, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { getOrders, getInventory, getCustomers, getRevenue } from '../../API';

// Import the Chart js =========================>

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

function Dashboard() {
  
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then(res =>{
      setOrders(res.products?.length);
    });

    getInventory().then(res => {
      setInventory(res.products?.length);
    });

    getCustomers().then(res => {
      setCustomers(res.users?.length);
    });

    getRevenue().then(res => {
      setRevenue(res.total)
    });
  
    
  }, [])
  
  return (
    <div>
      <Space size={12} direction='vertical'>
    <Typography.Title level={4}>Dashboard</Typography.Title>
    <Space>
      <DashboardCard icon={<ShoppingCartOutlined 
      style={{
        color: 'green',
         backgroundColor: 'rgba(0, 255, 0, 0.125)',
         borderRadius: 16,
        fontSize: 24,
        padding: 8,
      }} 
      />} myTitle={"Orders"} myValue={orders} />
      <DashboardCard icon={<ShopOutlined
      style={{
        color: 'blue',
         backgroundColor: 'rgba(0, 0, 255, 0.25)',
         borderRadius: 16,
        fontSize: 24,
        padding: 8,
      }} 
      />} myTitle={"Inventory"} myValue={inventory} />
      <DashboardCard icon={<UserOutlined
      style={{
        color: 'purple',
         backgroundColor: 'rgba(0, 255, 255, 0.125)',
         borderRadius: 16,
        fontSize: 24,
        padding: 8,
      }} 
      />} myTitle={"Customers"} myValue={customers} />
      <DashboardCard icon={<DollarCircleFilled
      style={{
        color: 'red',
         backgroundColor: 'rgba(255, 0, 0, 0.125)',
         borderRadius: 16,
        fontSize: 24,
        padding: 8,
      }} 
      />} myTitle={"Revenue"} myValue={revenue} />
    </Space>
    <Space>
      <RecentlyOrdered />
    </Space>
    </Space>
    </div>
    

  )
}

function DashboardCard({myTitle, myValue, icon}) {
  return (
   <Card>
        <Space direction='horizontal'>
        {icon}
        <Statistic title={myTitle} value={myValue}/>
        </Space>
      </Card>
      )
}

function RecentOrders() {

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    getOrders().then(res =>{
      console.log("here is the data:",res);
      
      setDataSource(res?.carts);

      setLoading(false)
    })
  }, []);
  
    return(
      <div>
        {

          dataSource?.map((item,index)=>(
            <div key={index}>
              {
                item.products?.map((anth,index)=>(
                  <div key={index}>
                    {anth.title}
                  </div>
                ))

              }



            </div>
          ))
        }



        {/* {
          dataSource?.length > 0 ? dataSource.map((item,index)=>(
            <div key={index}>
              {item.id}

            </div>
          ))
        } */}




      </div>


      // <Table columns={[
      //   {
      //     title: 'Title',
      //     dataIndex: 'title',
      //   },
      //   {
      //     title: 'Amount',
      //     dataIndex: 'quantity',
      //   },
      //   {
      //     title: 'Price',
      //     dataIndex: 'discountedTotal',
      //   },
       
      // ]}
      // loading={loading}
      // dataSource={dataSource}
      // >
      // </Table>
    );
}

function RecentlyOrdered() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then(res=>{
      setDataSource(res.products?.splice(0, 3));
      setLoading(false)
    })
  
   
  }, [])
  
  return (
    <>
    <Typography.Text>Recent Orders</Typography.Text>
    <Table
    columns={[
      {
      title: "Title",
      dataIndex: "title"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "discountedTotal"
    },
  ]}
  loading={loading}
  dataSource={dataSource}
  pagination={false}
    ></Table>
    </>
  )
}

// function DashboardChart() { 
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//         text: 'Orders Revenue',
//       },
//     },
//   };

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };
//   return <Bar options={options} data={data} />;
// }

export default Dashboard;