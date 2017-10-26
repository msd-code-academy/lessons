import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import "./Party.css"

export default class Party extends PureComponent {
    
  selectParty = (e) => {
    this.props.partySelected(this.props.party)
  }
  render() {
    const { party } = this.props
    return (
      <a onClick={this.selectParty} key={party.name} className="Party" style={{ borderColor: party.color }}>
        <h2>{party.name}</h2>
        <p>
          Members in parliament: {party.name}
        </p>
      </a>
    )
  }
}

Party.propTypes = {
  party: PropTypes.shape({
    name: PropTypes.string.isRequired,
    members: PropTypes.number.isRequired,
    color: PropTypes.string
  }),
  partySelected: PropTypes.func
}

Party.defaultProps = {
  partySelected: () => {
    /* Do nothing */
  }
}
