import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function ToggleButtonOverview() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      size='small'
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="month">Month</ToggleButton>
      <ToggleButton value="year">Year</ToggleButton>
    </ToggleButtonGroup>
  );
}