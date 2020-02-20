import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../../components/UI/Page'
import StellarLink from '../../components/UI/Link'

import { withResourceContextConsumer } from '../../components/Contexts'

import Game from '../../components/Game'

import * as ROUTES from '../../constants/routes'

const Battle = ({ resourceContext: [resource] }) => (
  <Page>
    <PageHeader>
      <StellarLink component={RouterLink} to={ROUTES.HOME}>
        the space game
      </StellarLink>
    </PageHeader>
    <PageBody>
      <Game resource={resource} />
    </PageBody>
  </Page>
)

Battle.propTypes = {
  resourceContext: PropTypes.array.isRequired
}

export default withResourceContextConsumer(Battle)
