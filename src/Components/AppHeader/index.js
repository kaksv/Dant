import { Badge, Image, Typography, Space, Drawer, List} from 'antd';
import React, { useState, useEffect } from 'react';

// Import Icons for use.
import { MailOutlined, BellFilled,  } from '@ant-design/icons';
import { getComments, getOrders } from '../../API';


function AppHeader() {
  const [comments, setComments] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  useEffect(() => {
    getComments().then(res => {
setComments(res.comments);
    });

    getOrders().then(res => {
      setOrderCount(res.products);
    })
  
  }, []);
  
  return (
    <div className="AppHeader">
      <Image
       src='https://images.seeklogo.com/logo-png/55/1/escudo-colombia-fcf-logo-png_seeklogo-556647.png'
       alt='Logo'
      width={40}
      ></Image>
      <Typography.Title>Kakooza's Dashboard</Typography.Title>
      <Space>
        <Badge count={comments?.length} dot>
        <MailOutlined style={{ fontSize: 24 }} onClick={() =>{
          setCommentsOpen(true);
        }} />
        </Badge>
        <Badge count={orderCount?.length}>
        <BellFilled style={{ fontSize: 24 }} onClick={() =>{
          setNotificationsOpen(true);
        }}/>
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentsOpen} onClose={() => {
        setCommentsOpen(false)
      }} maskClosable>
        <List dataSource={comments} renderItem={(item) =>{
         return <List.Item>{item.body}</List.Item>
        }}></List>
      </Drawer>

      <Drawer title="Notifications" open={notificationsOpen} onClose={() => {
        setNotificationsOpen(false)
      }} maskClosable>
        <List dataSource={orderCount} renderItem={(item) =>{
         return <List.Item><Typography.Text strong>{item.title} </Typography.Text> has been ordered.</List.Item>
        }}></List>
      </Drawer>
    </div>
  )
}

export default AppHeader;