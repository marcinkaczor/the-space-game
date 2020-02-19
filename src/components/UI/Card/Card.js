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
      <Card>
        <CardContent>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Avatar>LS</Avatar>
            <Typography style={{ textAlign: 'center', margin: '15px 0' }}>Luke Skywalker</Typography>
          </Box>
          <Table padding='none'>
            <TableBody>
              <TableRow>
                <TableCell>Height</TableCell>
                <TableCell align='right'>177</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mass</TableCell>
                <TableCell align='right'>77</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hair color</TableCell>
                <TableCell align='right'>blonde</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grow>
  </Box>
)

export default StellarCard
