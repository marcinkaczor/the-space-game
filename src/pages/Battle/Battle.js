import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../../components/UI/Page'
import StellarLink from '../../components/UI/Link'

import { withResourceConsumer, withScoreConsumer } from '../../components/Contexts'

import Game from '../../components/Game'

import * as ROUTES from '../../constants/routes'

const Battle = ({ resourceContext: [resource], scoreContext: [score, setScore] }) => (
  <Page>
    <PageHeader addition={score}>
      <StellarLink component={RouterLink} to={ROUTES.HOME}>
        the space game
      </StellarLink>
    </PageHeader>
    <PageBody>
      <Game url={resource} score={score} setScore={setScore} />
    </PageBody>
  </Page>
)

Battle.propTypes = {
  resourceContext: PropTypes.array.isRequired
}

export default withScoreConsumer(withResourceConsumer(Battle))
