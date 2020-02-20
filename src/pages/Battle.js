import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../components/UI/Page'
import StellarLink from '../components/UI/Link'

import { withResourceContextConsumer } from '../components/Contexts'

import Game from '../containers/Game'

import * as ROUTES from '../constants/routes'
import * as API from '../constants/api'

const Battle = ({ resourceContext: [resource] }) => (
  <Page>
    <PageHeader>
      <StellarLink component={RouterLink} to={ROUTES.HOME}>
        the space game
      </StellarLink>
    </PageHeader>
    <PageBody>
      <Game url={`${API.ROOT}${resource}`} />
    </PageBody>
  </Page>
)

export default withResourceContextConsumer(Battle)
