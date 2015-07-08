import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import MenuListItem from './MenuListItem'

const GITHUB_REPO =
  'https://github.com/timdoes'
const menuItems = [
  { text: 'Stargazers', link: '/stargazers/timdoes', icon: 'fa fa-star' },
  { text: 'About', link: '/about', icon: 'fa fa-dot-circle-o' },
  { text: 'Github', link: GITHUB_REPO, icon: 'fa fa-github', isExternal: true }
]

export default class Menu extends React.Component {

  static propTypes = {
    activeClass: PropTypes.string.isRequired
  }

  render () {

    return (
      <div id="menu" ref="menu" className={this.props.activeClass}>
        <div className="pure-menu">
          <Link to="/" className="pure-menu-heading">TimDOES</Link>

          <ul className="pure-menu-list">
            {menuItems.map((item, i) => <MenuListItem {...item} key={i} />)}
          </ul>
        </div>
      </div>
    )
  }
}
