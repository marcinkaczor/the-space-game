import React from 'react'
import PropTypes from 'prop-types'
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

StellarSelect.propTypes = {
  label: PropTypes.string,
  helper: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentValue: PropTypes.string.isRequired,
  setCurrentValue: PropTypes.func.isRequired
}

export default StellarSelect
