import React from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'

import { capitalize } from '../../../utils'

const StellarSelect = ({ label, helper, values, currentValue, setCurrentValue }) => (
  <Box mb={5}>
    <FormControl>
      <InputLabel id={`select-${label}-label`}>{capitalize(label)}</InputLabel>
      <Select
        labelId={`select-${label}-label`}
        id={`select-${label}`}
        value={currentValue}
        onChange={e => setCurrentValue(e.target.value)}
      >
        {values.map((value, i) => <MenuItem key={i} value={value}>{capitalize(value)}</MenuItem>)}
      </Select>
      <FormHelperText>{capitalize(helper)}</FormHelperText>
    </FormControl>
  </Box>
)

export default StellarSelect
