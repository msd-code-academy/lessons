import React from 'react'
import Modal from 'react-modal'
import '../../styles/EditNoteModal.css'

class EditNoteModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      note: {
        uuid: props.noteId,
        text: props.text,
        title: props.title,
      },
    }
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    })
  }

  handleChange = field => e => {
    let note = this.state.note
    note[field] = e.target.value
    this.setState({ note })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.editNote(this.state.note)
    this.toggleModal()
  }

  render() {
    const { modalIsOpen } = this.state
    return (
      <div className="EditNoteModal">
        <a onClick={this.toggleModal}>edit</a>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.toggleModal}
          className="EditNoteModal-modal-window"
          overlayClassName="EditNoteModal-modal-overlay"
        >
          <h2>Edit a note</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={this.state.note.title}
                onChange={this.handleChange('title')}
              />
            </div>
            <div className="EditNoteModal-textarea">
              <label htmlFor="text">Text</label>
              <textarea
                rows="4"
                id="text"
                value={this.state.note.text}
                onChange={this.handleChange('text')}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>
    )
  }
}

export default EditNoteModal
