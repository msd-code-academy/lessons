import React from 'react'
import PropTypes from 'prop-types'

import NewNoteModal from './NewNoteModal'
import logo from '../logo.png'
import '../styles/Header.css'

class Header extends React.Component {
  render() {
    const { ...props } = this.props
    return (
      <div className="Header">
        <div className="Header-logo">
          <img src={logo} alt="logo" />
          <b>IDEA JOURNAL</b>
          <span>(containing {this.props.noteCount} ideas)</span>
        </div>
        <NewNoteModal {...props} />
      </div>
    )
  }
}

Header.propTypes = {
  noteCount: PropTypes.number.isRequired
}

export default Header
