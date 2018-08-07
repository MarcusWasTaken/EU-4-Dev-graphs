import React, { Component } from 'react'
import styled from 'styled-components'
import { manaCostToEmbrace } from 'utils/math'

const Row = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`

class Calculator extends Component {
  state = {
    name: '',
    startingDev: 3,
    devModifier: 0
  }

  render() {
    const { onRemove } = this.props
    const { name, startingDev, devModifier } = this.state

    return (
      <div>
        <Row>
          <Label>Name</Label>
          <input
            name="name"
            value={name}
            onChange={this.onChange}
            type="text"
          />
        </Row>
        <Row>
          <Label>Starting dev</Label>
          <input
            name="startingDev"
            value={startingDev}
            onChange={this.onChange}
            min="3"
            type="number"
          />
        </Row>
        <Row>
          <Label>Development modifier</Label>
          <input
            name="devModifier"
            value={devModifier}
            onChange={this.onChange}
            type="number"
          />
        </Row>
        <Row>
          Final cost: {manaCostToEmbrace(startingDev, devModifier / 100)}
        </Row>
        <button type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    )
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
}

export default Calculator
