import React, { Component } from 'react'

class Output extends Component {
  toFeet(n) {
    const realFeet = ((n * 0.393700) / 12)
    const feet = Math.floor(realFeet)
    const inches = Math.round((realFeet - feet) * 12)
    return feet + "'" + inches + "\""
  }

  toPounds(n) {
    const nearExact = n / 0.45359237
    const lbs = Math.floor(nearExact)
    return lbs
  }

  render() {
    const height = this.toFeet(this.props.data.height)
    const weight = this.toPounds(this.props.data.weight)
    const bmi = this.props.data.bmi
    const bmiClass = this.props.data.bmiClass
    return (
      <div className="output">
        {weight}
      </div>
    )
  }
}

export default Output
