import React from 'react'
import NewNoteModal from './NewNoteModal'
import logo from '../logo.png'
import '../styles/Header.css'

class Header extends React.Component {

	render() {
		const {...props} = this.props
		return (
			<div className="Header">
				<div className="Header-logo">
					<img src={logo} alt="logo" />
					<b>IDEA JOURNAL</b>
				</div>
        <NewNoteModal {...props} />
			</div>
		)
	}
}

export default Header