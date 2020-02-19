import React, { useContext } from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'

import { ResourceContext } from '../components/Contexts'

const Helper = () => {
  const [resource, setResource] = useContext(ResourceContext)

  const handleChange = e => {
    setResource(e.target.value)
  }

  return (
    <Box mb={5}>
      <FormControl>
        <InputLabel id='select-resource-label'>Resource</InputLabel>
        <Select
          labelId='select-resource-label'
          id='select-resource'
          value={resource}
          onChange={handleChange}
        >
          <MenuItem value='people'>People</MenuItem>
          <MenuItem value='starships'>Starships</MenuItem>
        </Select>
        <FormHelperText>Select which resource to play against</FormHelperText>
      </FormControl>
    </Box>
  )
}
export default Helper
