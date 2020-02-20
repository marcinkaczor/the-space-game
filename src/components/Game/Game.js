import React from 'react'

import Caption from '../UI/Caption'
import withFetcher from '../Fetcher'

import Area from './Area'

import * as RESOURCES from '../../constants/resources'

const Game = ({ resource, data, loading, error }) => (
  <>
    {error && <Caption>{error}</Caption>}
    {loading && <Caption>Loading ...</Caption>}
    {data && (
      <>
        <Area data={data} starships={resource === RESOURCES.STARSHIPS} />
        <Area data={data} starships={resource === RESOURCES.STARSHIPS} />
      </>
    )}
  </>
)

export default withFetcher(Game)
