import React from 'react'
import { Helmet } from 'react-helmet'

const head = () => {
  return (
    <Helmet>
      <title>Homepage React SSR</title>
      <meta property="og:title" content="Homepage React SSR" />
    </Helmet>
  )
}

const HomePage = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      {head()}
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
  )
}

export default {
  component: HomePage
}