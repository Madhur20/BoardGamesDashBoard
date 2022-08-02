import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CenteredTabs(props: any) {
  const router = useRouter();
  const [value, setValue] = React.useState(props.page);

  React.useEffect(() => {
    const menu_data = window.localStorage.getItem('MENU_INDEX');
    if (menu_data !== null) setValue(JSON.parse(menu_data));
    console.log('menu_value', menu_data);
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    window.localStorage.setItem('MENU_INDEX', JSON.stringify(newValue));
    console.log(newValue);
    
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#333333' }}>
      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" centered>
        <Link href="/" passHref><Tab label="Home" /></Link>
        <Link href="/games" passHref><Tab label="Games" /></Link>
        <Link href="/friends" passHref><Tab label="Friends" /></Link>
        <Link href="/guide" passHref><Tab label="Guide" /></Link>
      </Tabs>
    </Box>
  );
}