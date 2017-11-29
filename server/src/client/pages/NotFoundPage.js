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
    <div>
      {head()}
      <h1>Oops, route not found.</h1>
    </div>
  )
}

export default {
  component: NotFoundPage
}