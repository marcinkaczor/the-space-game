import React from 'react'
// import PropTypes from 'prop-types'
import {
  Card, CardContent, Box, Avatar, Typography,
  Table, TableBody, TableRow, TableCell,
  Grow
} from '@material-ui/core'

const StellarCard = ({ card, starships }) => (
  <Box mx='2vw'>
    <Grow in>
      <Card style={{ width: '140px', height: '240px' }}>
        <CardContent>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Avatar>{card.name.charAt(0)}</Avatar>
            <Typography style={{ textAlign: 'center', margin: '15px 0' }}>{card.name}</Typography>
          </Box>
          <Table padding='none'>
            <TableBody>
              <TableRow>
                <TableCell>Height</TableCell>
                <TableCell align='right'>{card.height}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mass</TableCell>
                <TableCell align='right'>{card.mass}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell align='right'>{card.gender}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grow>
  </Box>
)

export default StellarCard
