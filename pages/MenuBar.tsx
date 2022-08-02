import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

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
        <Tab label="Home" />
        <Tab label="My Games" />
        <Tab  label="Friends" />
        <Tab label="How To" />
      </Tabs>
    </Box>
  );
}