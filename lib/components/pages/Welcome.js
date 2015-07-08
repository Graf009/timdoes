import React from 'react'
// import { Link } from 'react-router'

export default class Welcome extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>TimDOES</h1>
          <h2>Learn what Tim does below</h2>
        </div>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-5">
            <h1 className="centered">React</h1>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <h1 className="centered">React Native</h1>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <h1 className="centered">JavaScript</h1>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <h1 className="centered">Node</h1>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <h1 className="centered">Git</h1>
          </div>
        </div>
      </div>
    )
  }
}
