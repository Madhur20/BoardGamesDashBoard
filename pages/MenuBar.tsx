import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#333333' }}>
      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" centered>
        <Tab label="Home" />
        <Tab label="My Games" />
        <Tab label="Friends" />
      </Tabs>
    </Box>
  );
}