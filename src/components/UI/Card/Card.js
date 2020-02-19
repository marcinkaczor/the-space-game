import React from 'react'
// import PropTypes from 'prop-types'
import {
  Card, CardContent, Box, Avatar, Typography,
  Table, TableBody, TableRow, TableCell,
  Grow
} from '@material-ui/core'

const StellarCard = ({ resource }) => (
  <Box mx='2vw'>
    <Grow in>
      <Card style={{ width: '140px', height: '240px' }}>
        <CardContent>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Avatar>{resource.name.charAt(0)}</Avatar>
            <Typography style={{ textAlign: 'center', margin: '15px 0' }}>{resource.name}</Typography>
          </Box>
          <Table padding='none'>
            <TableBody>
              <TableRow>
                <TableCell>Height</TableCell>
                <TableCell align='right'>{resource.height}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mass</TableCell>
                <TableCell align='right'>{resource.mass}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell align='right'>{resource.gender}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grow>
  </Box>
)

export default StellarCard
