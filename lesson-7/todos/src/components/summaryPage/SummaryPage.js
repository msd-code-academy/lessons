import React from 'react'
import { connect } from 'react-redux'
import renderHTML from 'react-render-html';

import '../../styles/SummaryPage.css'
import { fetchSummaryHtmlAsync } from '../../Reducer';

class SummaryPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchSummaryHtmlAsync());
    }
    
    render() {
        return (
            <div className="Summary">
                { this.props.summaryHtml && renderHTML(this.props.summaryHtml) }
            </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    summaryHtml: state.summaryHtml
  }
}

export default connect(mapStateToProps)(SummaryPage);