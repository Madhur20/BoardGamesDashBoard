import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CenteredTabs() {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%', bgcolor: '#333333' }}>
      <Tabs textColor="inherit" indicatorColor="secondary" centered>
        <Link href="/" prefetch={true}><Tab label="Home" /></Link>
        <Link href="/games"><Tab label="Games" /></Link>
        <Link href="/friends"><Tab label="Friends" /></Link>
        <Link href="/guide"><Tab label="Guide" /></Link>
      </Tabs>
    </Box>
  );
}