import React, { useState, useEffect } from 'react'
import axios from 'axios'

const withFetcher = Component => props => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async url => {
      setLoading(true)

      try {
        const results = await axios.get(url)

        setData(results.data.results)
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }

    fetchData(props.url)
  }, [props.url])

  return <Component {...props} data={data} loading={loading} error={error} />
}

export default withFetcher
