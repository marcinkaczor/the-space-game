import React, { createContext } from 'react'

import { useSessionState } from '../Hooks'

const ResourceContext = createContext()

const withResourceContext = Component => props => {
  const [resource, setResource] = useSessionState(['resource', 'people'])

  return (
    <ResourceContext.Provider value={[resource, setResource]}>
      <Component {...props} />
    </ResourceContext.Provider>
  )
}

export { ResourceContext, withResourceContext }
