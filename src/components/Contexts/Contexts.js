import React, { createContext } from 'react'

import { useSessionState } from '../Hooks'

import * as RESOURCES from '../../constants/resources'

const ResourceContext = createContext()

const withResourceContext = Component => props => {
  const [resource, setResource] = useSessionState(['resource', RESOURCES.PEOPLE])

  return (
    <ResourceContext.Provider value={[resource, setResource]}>
      <Component {...props} />
    </ResourceContext.Provider>
  )
}

export { ResourceContext, withResourceContext }
