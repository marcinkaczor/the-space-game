import React from 'react'

import Caption from '../UI/Caption'
import withFetcher from '../Fetcher'

import Area from './Area'

import * as ATTRIBUTES from '../../constants/attributes'
import * as RESOURCES from '../../constants/resources'

const Game = ({ resource, data, loading, error }) => {
  const attributes = resource === RESOURCES.PEOPLE
    ? ATTRIBUTES.PEOPLE_ATTRIBUTES : ATTRIBUTES.STARSHIPS_ATTRIBUTES

  return (
    <>
      {error && <Caption>{error}</Caption>}
      {loading && <Caption>Loading ...</Caption>}
      {data && (
        <>
          <Area data={data} attributes={attributes} />
          <Area data={data} attributes={attributes} />
        </>
      )}
    </>
  )
}

export default withFetcher(Game)
