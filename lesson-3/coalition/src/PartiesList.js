import React, { Component } from "react"
import "./PartiesList.css"

import Party from "./Party"

export default class PartiesList extends Component {
  render() {
    return (
      <section className="PartiesList-wrapper">
        {this.props.parties.map(party => 
          <Party key={party.name} party={party} partySelected={this.props.partySelected} />
        )}
      </section>
    )
  }
}
