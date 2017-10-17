import React from 'react'
import '../styles/Note.css'

class Note extends React.Component {

	constructor() {
		super()
		this.state = {
			showMore: false
		}
	}

	handleShowMore = () => {
    this.setState({
			showMore: !this.state.showMore
		})
	}
	
	render() {
		const {noteId, title, text, removeNoteFromList} = this.props
		const {showMore} = this.state
		return (
			<div className="Note">
				<div className="Note-title">
					<h2>{title}</h2>
					<a onClick={removeNoteFromList(noteId)}>remove</a>
				</div>
				{showMore && <div className="Note-text">{text}</div>}
				<a onClick={this.handleShowMore}>{`Show ${showMore ? 'less' : 'more'} details`}</a>
			</div>
		)
	}
}

export default Note