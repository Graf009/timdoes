import React from 'react'
// import { Link } from 'react-router'

export default class FourOhFour extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>404</h1>
          <h2>Do not pass go. Do not collect <code>200 OK</code></h2>
        </div>
        <div className="content">
          <p>Oops</p>
        </div>
      </div>
    )
  }
}
