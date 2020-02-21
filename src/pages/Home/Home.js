import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import Page, { PageHeader, PageBody } from '../../components/UI/Page'
import Select from '../../components/UI/Select'
import Button from '../../components/UI/Button'

import { withResourceConsumer } from '../../components/Contexts'

import * as RESOURCES from '../../constants/resources'
import * as ROUTES from '../../constants/routes'

const Home = ({ resourceContext: [resource, setResource] }) => (
  <Page>
    <PageHeader home>
      the space game
    </PageHeader>
    <PageBody column>
      <Select
        label='resource'
        helper='select which resource to play against'
        values={[RESOURCES.PEOPLE, RESOURCES.STARSHIPS]}
        currentValue={resource}
        setCurrentValue={setResource}
      />
      <Button component={RouterLink} to={ROUTES.BATTLE}>
        START GAME
      </Button>
    </PageBody>
  </Page>
)

Home.propTypes = {
  resourceContext: PropTypes.array.isRequired
}

export default withResourceConsumer(Home)
