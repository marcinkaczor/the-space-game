import React from 'react'

import Caption from '../../components/UI/Caption'
import withFetcher from '../../components/Fetcher'

import Player from './Player'

import * as API from '../../constants/api'

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

export default withFetcher(API.PEOPLE)(Game)
