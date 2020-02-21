import React, { useState, Fragment } from 'react'
import { Snackbar, Button as MuiButton } from '@material-ui/core'

import Caption from '../UI/Caption'
import Card from '../UI/Card'
import Button from '../UI/Button'

import withFetcher from '../Fetcher'

import { randomItem, increaseScore } from '../../utils'

import * as ATTRIBUTES from '../../constants/attributes'
import * as PLAYERS from '../../constants/players'
import * as RESOURCES from '../../constants/resources'

const initialBoard = {
  [PLAYERS.LEFT]: null,
  [PLAYERS.RIGHT]: null
}

const initialItem = {
  [PLAYERS.LEFT]: null,
  [PLAYERS.RIGHT]: null
}

const initialWinner = null

const Game = ({ data, loading, error, url, score, setScore }) => {
  const [board, setBoard] = useState(initialBoard)
  const [item, setItem] = useState(initialItem)
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

  const attributes = url === RESOURCES.PEOPLE
    ? ATTRIBUTES.PEOPLE_ATTRIBUTES : ATTRIBUTES.STARSHIPS_ATTRIBUTES

  const handleButtonClick = player => {
    const selectedItem = randomItem(data)
    setItem({ ...item, [player]: selectedItem })
    setBoard({ ...board, [player]: Number(selectedItem[attributes[0]]) })
  }

  const handleSnackbarClick = () => {
    setWinner(initialWinner)
    setItem(initialItem)
  }

  return (
    <>
      {error && <Caption>{error}</Caption>}
      {loading && <Caption>Loading ...</Caption>}
      {data && [PLAYERS.LEFT, PLAYERS.RIGHT].map((player, i) => (
        <Fragment key={i}>
          {item[player] ? (
            <Card title={item[player].name} item={item[player]} attributes={attributes} />
          ) : (
            <Button onClick={() => handleButtonClick(player)}>DRAW THE CARD</Button>
          )}
        </Fragment>
      ))}
      <Snackbar
        open={Boolean(winner)}
        message={winner === PLAYERS.RIGHT || winner === PLAYERS.LEFT ? `Player ${winner} wins!` : 'Draw!'}
        action={<MuiButton size='small' onClick={handleSnackbarClick}>PLAY AGAIN</MuiButton>}
      />
    </>
  )
}

export default withFetcher(Game)
