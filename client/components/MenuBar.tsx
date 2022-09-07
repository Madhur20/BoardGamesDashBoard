import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';

export default function CenteredTabs(props: any) {
  const [value, setValue] = React.useState(props.page);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{padding:1 ,width: '100%', bgcolor: '#333333', marginTop: 1 }}>
      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" centered>
        <Link href="/home" passHref><Tab label="Home" /></Link>
        <Link href="/games" passHref><Tab label="Games" /></Link>
        <Link href="/friends" passHref><Tab label="Friends" /></Link>
        <Link href="/guide" passHref><Tab label="Guide" /></Link>
      </Tabs>
    </Box>
  );
}