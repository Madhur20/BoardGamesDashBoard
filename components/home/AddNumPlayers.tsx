import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import { withStyles } from "@material-ui/core/styles";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import clsx from "clsx";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "1","2","3","4","5","6","7","8","9"
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddNumPlayers() {
  const theme = useTheme(); 
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // const iconStyles = {
  //   selectIcon: {
  //     color: "green"
  //   }
  // };
  // const CustomExpandMore = withStyles(iconStyles)(
  //   ({ className, classes, ...rest }) => {
  //     return (
  //       <ExpandMoreIcon
  //         {...rest}
  //         className={clsx(className, classes.selectIcon)}
  //       />
  //     );
  //   }
  // );

  return (
    <div>
      <FormControl sx={{ bgcolor: "#e3e3e3", m: 1, width: 300,  }}>
        <InputLabel required focused={false} id="demo-multiple-chip-label" sx={{color:"#9C27B0"}}>Number of Players</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          color="secondary"
          // IconComponent={CustomExpandMore}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
