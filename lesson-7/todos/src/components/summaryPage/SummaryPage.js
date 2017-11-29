import React from 'react'
import { connect } from 'react-redux'

import '../../styles/SummaryPage.css'
import { fetchNotesAsync } from '../../Reducer';

class SummaryPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchNotesAsync());
    }
    
    render() {
        return (
            <div className="Summary">
                Number of notes: {this.props.notes.length}
            </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(SummaryPage);