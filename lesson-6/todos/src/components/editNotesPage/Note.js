import React from 'react'

import EditNoteModal from './EditNoteModal'
import '../../styles/Note.css'

class Note extends React.Component {
  state = {
    showMore: false,
  }

  handleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    })
  }

  render() {
    const { noteUuid, title, text, removeNoteFromList } = this.props
    const { showMore } = this.state
    return (
      <div className="Note">
        <div className="Note-title">
          <h2>{title}</h2>
          <div>
            <EditNoteModal {...this.props}/>
            <a onClick={removeNoteFromList(noteUuid)}>remove</a>
          </div>
        </div>
        {showMore && <div className="Note-text">{text}</div>}
        <a onClick={this.handleShowMore}>{`Show ${showMore ? 'less' : 'more'} details`}</a>
      </div>
    )
  }
}

export default Note
