import React from 'react'
import Header from './Header'
import EditNotesPage from './editNotesPage/EditNotesPage'
import Footer from './Footer'

import '../styles/App.css'

class App extends React.Component {


  render() {

    return (
      <div className="App">
        <Header />
        <EditNotesPage />
        <Footer />
      </div>
    )
  }
}

export default App
