import React, { useEffect, useState} from 'react';
import { Menu } from 'antd';

// Import Icons for use.
import { UserOutlined, AppstoreOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

function SideMenu() {

  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState('/')

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  
  }, [location.pathname]);
  
  const navigate = useNavigate();
  return (
    <div className='SideMenu'>
      <Menu
      className='SideMenuVertical'
      mode='vertical'
       onClick={(item) =>{
          // item.key
          navigate(item.key);
       }}
       selectedKeys={[selectedKeys]}
       items={[
        {
        label: 'Dashboard',
        icon: <AppstoreOutlined />,
        key: '/'
      },
      {
        label: 'Inventory',
        icon: <ShopOutlined />,
        key: '/inventory',
      },
      {
        label: 'Orders',
        icon: <ShoppingCartOutlined />,
        key: '/orders',
      },
      {
        label: 'Customers',
        key: '/customers',
        icon: <UserOutlined />
      },
      ]}>

      </Menu>
    </div>
  )
}

export default SideMenu;