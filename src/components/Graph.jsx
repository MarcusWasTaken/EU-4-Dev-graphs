import React, { Component } from 'react'
import Chart from 'chart.js/dist/Chart.min.js'
import GraphWrapper from './GraphWrapper'
import { labelsFromRange, manaCostFromRange } from 'utils/math'

class Graph extends Component {
  componentDidMount() {
    const { labels, datasets } = this.props
    const ctx = this.canvas.getContext('2d')
    console.log(manaCostFromRange(3, 50, 0))
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labelsFromRange(3, 50),
        datasets: [
          {
            label: '0% cost modifiers',
            borderColor: '#BA68C8',
            backgroundColor: '#BA68C8',
            fill: false,
            data: manaCostFromRange(3, 50, 0)
          },
          {
            label: '20% cost modifiers',
            borderColor: '#4DB6AC',
            backgroundColor: '#4DB6AC',
            fill: false,
            data: manaCostFromRange(3, 50, 0.2)
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {},
              scaleLabel: {
                display: true,
                labelString:
                  'Total Monarch Points Necessary to Aquire Institution'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                callback: value => (value % 10 === 0 ? value : null),

                maxRotation: 0
              },
              scaleLabel: {
                display: true,
                labelString: 'Starting Development'
              }
            }
          ]
        },
        elements: {
          line: {
            tension: 0 // disables bezier curves
          }
        }
      }
    })
  }

  componentDidUpdate() {}

  render() {
    return (
      <GraphWrapper>
        <canvas ref={canvas => (this.canvas = canvas)} />
      </GraphWrapper>
    )
  }
}

export default Graph
