import { Typography } from 'antd';
import React from 'react';

// Import Icons for use.

function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>+123456789</Typography.Link>
      <Typography.Link href='https://www.google.com' target='_blank'>Privacy Ploicy</Typography.Link>
      <Typography.Link href='https://www.google.com' target='_blank'>Terms & Conditions</Typography.Link>
    </div>
  )
}

export default AppFooter;