import React, { Component } from 'react'
import Graph from 'components/Graph'
import AppContainer from 'containers/app/AppContainer'

class App extends Component {
  render() {
    return (
      <AppContainer>
        {/* <button onClick={this.addCalc}>Add Calculator</button> */}
        {/* <AppGrid>
          {calculators.map(calc => (
            <Calculator key={calc} onRemove={() => this.removeCalc(calc)} />
          ))}
        </AppGrid> */}
        <Graph />
      </AppContainer>
    )
  }
}

export default App
