import React from 'react'
import PropTypes from 'prop-types'
import { Grow, Card, CardContent, Avatar, Table, TableBody, TableRow, TableCell, CardHeader } from '@material-ui/core'

import { capitalize, getFirstChar } from '../../../utils'

const StellarCard = ({ title, resource, attributes }) => (
  <Grow in>
    <Card>
      <CardHeader avatar={<Avatar>{getFirstChar(title)}</Avatar>} title={title} />
      <CardContent>
        <Table padding='none'>
          <TableBody>
            {attributes.map((attribute, i) => (
              <TableRow key={i}>
                <TableCell>{capitalize(attribute)}</TableCell>
                <TableCell align='right'>{resource[attribute]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </Grow>
)

StellarCard.propTypes = {
  title: PropTypes.string,
  resource: PropTypes.object.isRequired,
  attributes: PropTypes.array.isRequired
}

export default StellarCard
