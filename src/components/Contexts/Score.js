import React, { createContext, useContext } from 'react'

import { useSessionState } from '../Hooks'

import SCORE from '../../constants/score'

const ScoreContext = createContext()

const withScoreProvider = Component => props => {
  const [score, setScore] = useSessionState(['score', SCORE])

  return (
    <ScoreContext.Provider value={[score, setScore]}>
      <Component {...props} />
    </ScoreContext.Provider>
  )
}

const withScoreConsumer = Component => props => {
  const [score, setScore] = useContext(ScoreContext)

  return <Component {...props} scoreContext={[score, setScore]} />
}

export { ScoreContext, withScoreProvider, withScoreConsumer }
