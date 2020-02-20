import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../components/UI/Page'
import StellarSelect from '../components/UI/Select'
import StellarButton from '../components/UI/Button'

import { withResourceContextConsumer } from '../components/Contexts'

import * as RESOURCES from '../constants/resources'
import * as ROUTES from '../constants/routes'

const Home = ({ resourceContext: [resource, setResource] }) => (
  <Page>
    <PageHeader home>
      the space game
    </PageHeader>
    <PageBody column>
      <StellarSelect
        label='resource'
        helper='select which resource to play against'
        values={[RESOURCES.PEOPLE, RESOURCES.STARSHIPS]}
        currentValue={resource}
        setCurrentValue={setResource}
      />
      <StellarButton component={RouterLink} to={ROUTES.BATTLE}>
        START GAME
      </StellarButton>
    </PageBody>
  </Page>
)

Home.propTypes = {
  resourceContext: PropTypes.array.isRequired
}

export default withResourceContextConsumer(Home)
