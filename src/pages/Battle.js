import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../components/UI/Page'
import StellarLink from '../components/UI/Link'

import { ResourceContext } from '../components/Contexts'

import Game from '../containers/Game'

import * as API from '../constants/api'
import * as ROUTES from '../constants/routes'

const Battle = () => {
  const [resource] = useContext(ResourceContext)

  return (
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
}

export default Battle
