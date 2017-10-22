import React, { Component } from "react"
import "./PartiesList.css"

import Party from "./Party"

import { sumMembers } from "./functions"

export default class Coalition extends Component {
  render() {

    const members = sumMembers(this.props.parties)

    return (
      <div>
        <section className="PartiesList-perks">
          Your Coalition has {members} members.
        </section>
        <article className="PartiesList-wrapper">
          {this.props.parties.map(party => 
            <Party key={party.name} party={party} partySelected={this.props.partySelected} />
          )}
        </article>
      </div>
    )
  }
}
