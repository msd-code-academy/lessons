import React from 'react'
import Modal from 'react-modal'
import * as shortId from 'shortid'
import '../styles/NewNoteModal.css'

class NewNoteModal extends React.Component {
	constructor() {
		super()
		this.state = {
			modalIsOpen: false,
			note: {}
		}
	}

	toggleModal = () => {
    this.setState({
			modalIsOpen: !this.state.modalIsOpen
		})
	}

	handleChange = (field) => (e) => {
		let note = this.state.note
		note[field] = e.target.value
		this.setState({note})
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		const {onAddNote} = this.props
		const {note} = this.state
    onAddNote({...note, uuid: shortId.generate()})
		this.toggleModal()
	}

	render() {
		const {modalIsOpen}  = this.state
		return (
			<div className="NewNoteModal">
				<a onClick={this.toggleModal}>ADD NOTE</a>
				<Modal
				  isOpen={modalIsOpen}
					onRequestClose={this.toggleModal}
					className="NewNoteModal-modal-window"
					overlayClassName="NewNoteModal-modal-overlay">
					<h2>Add a new note</h2>
					<form onSubmit={this.handleFormSubmit}>
						<div>
							<label htmlFor="title">Title</label>
							<input type="text" id="title" onChange={this.handleChange('title')} />
						</div>
						<div className="NewNoteModal-textarea">
							<label htmlFor="text">Text</label>
							<textarea rows="4" id="text" onChange={this.handleChange('text')} />
						</div>
						<button type="submit">Submit</button>
					</form>
				</Modal>
			</div>
		)
	}
}

export default NewNoteModal