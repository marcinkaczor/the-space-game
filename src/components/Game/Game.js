import React, { useState } from 'react'
import { Snackbar, Button } from '@material-ui/core'

import Caption from '../UI/Caption'
import withFetcher from '../Fetcher'

import Area from './Area'

import { increaseScore } from '../../utils'

import * as ATTRIBUTES from '../../constants/attributes'
import * as PLAYERS from '../../constants/players'
import * as RESOURCES from '../../constants/resources'

const initialBoard = {
  [PLAYERS.LEFT]: null,
  [PLAYERS.RIGHT]: null
}

const initialWinner = null

const Game = ({ data, loading, error, resource, score, setScore }) => {
  const [board, setBoard] = useState(initialBoard)
  const [winner, setWinner] = useState(initialWinner)

  if (Object.values(board).every(Boolean)) {
    if (board[PLAYERS.LEFT] > board[PLAYERS.RIGHT]) {
      setWinner(PLAYERS.LEFT)
      setScore(increaseScore(PLAYERS.LEFT)(score))
    } else if (board[PLAYERS.LEFT] < board[PLAYERS.RIGHT]) {
      setWinner(PLAYERS.RIGHT)
      setScore(increaseScore(PLAYERS.RIGHT)(score))
    } else {
      setWinner('both')
    }
    setBoard(initialBoard)
  }

  const attributes = resource === RESOURCES.PEOPLE
    ? ATTRIBUTES.PEOPLE_ATTRIBUTES : ATTRIBUTES.STARSHIPS_ATTRIBUTES

  const handleClick = () => {
    setWinner(initialWinner)
  }

  return (
    <>
      {error && <Caption>{error}</Caption>}
      {loading && <Caption>Loading ...</Caption>}
      {data && [PLAYERS.LEFT, PLAYERS.RIGHT].map((player, i) => (
        <Area key={i} player={player} data={data} attributes={attributes} board={board} setBoard={setBoard} />
      ))}
      <Snackbar
        open={Boolean(winner)}
        message={winner === PLAYERS.RIGHT || winner === PLAYERS.LEFT ? `Player ${winner} wins!` : 'Draw!'}
        action={<Button size='small' onClick={handleClick}>PLAY AGAIN</Button>}
      />
    </>
  )
}

export default withFetcher(Game)
