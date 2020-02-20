import React from 'react'

import Caption from '../UI/Caption'
import withFetcher from '../Fetcher'

import Player from './Player'

const Game = ({ data, loading, error }) => (
  <>
    {error && <Caption>{error}</Caption>}
    {loading && <Caption>Loading ...</Caption>}
    {data && (
      <>
        <Player data={data} />
        <Player data={data} />
      </>
    )}
  </>
)

export default withFetcher(Game)
