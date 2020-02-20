import React, { createContext, useContext } from 'react'

import { useSessionState } from '../Hooks'

import * as RESOURCES from '../../constants/resources'

const ResourceContext = createContext()

const withResourceContextProvider = Component => props => {
  const [resource, setResource] = useSessionState(['resource', RESOURCES.PEOPLE])

  return (
    <ResourceContext.Provider value={[resource, setResource]}>
      <Component {...props} />
    </ResourceContext.Provider>
  )
}

const withResourceContextConsumer = Component => props => {
  const [resource, setResource] = useContext(ResourceContext)

  return <Component {...props} resourceContext={[resource, setResource]} />
}

export { ResourceContext, withResourceContextProvider, withResourceContextConsumer }
