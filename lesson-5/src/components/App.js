import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import EditNotesPage from './editNotesPage/EditNotesPage'
import SummaryPage from './summaryPage/SummaryPage'
import Footer from './Footer'

import '../styles/App.css'

class App extends React.Component {


  render() {

    return (
      <div className="App">
        <Header />
        <Route path="/EditNotes" component={EditNotesPage} />
        <Route path="/Summary" component={SummaryPage}/>
        <Footer />
      </div>
    )
  }
}

export default App
