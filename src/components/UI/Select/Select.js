import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'

import { capitalize } from '../../../utils'

const StellarSelect = ({ label, helper, values, currentValue, setCurrentValue }) => (
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
)

StellarSelect.propTypes = {
  label: PropTypes.string.isRequired,
  helper: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentValue: PropTypes.string.isRequired,
  setCurrentValue: PropTypes.func.isRequired
}

export default StellarSelect
