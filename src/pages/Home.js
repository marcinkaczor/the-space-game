import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../components/UI/Page'
import StellarButton from '../components/UI/Button'

import * as ROUTES from '../constants/routes'

import Helper from './Helper'

const Home = () => (
  <Page>
    <PageHeader variant='h1' align='center'>
      the space game
    </PageHeader>
    <PageBody column>
      <Helper />
      <StellarButton component={RouterLink} to={ROUTES.BATTLE}>
        START GAME
      </StellarButton>
    </PageBody>
  </Page>
)

export default Home
