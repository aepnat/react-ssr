import React from 'react'
import { Helmet } from 'react-helmet'

const head = () => {
  return (
    <Helmet>
      <title>404 Not Found</title>
      <meta property="og:title" content="404 Not Found" />
    </Helmet>
  )  
}

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      {head()}
      <h3>404 Not Found</h3>
      <p>Page you are looking for is unknown.</p>
    </div>
  )
}

export default {
  component: NotFoundPage
}