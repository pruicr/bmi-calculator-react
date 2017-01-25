import React, { Component } from 'react'

import Output from './Components/Output'
import Range from './Components/Range'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height) {
    this.setState({height}, this.setBMI)
  }

  weightChange(weight) {
    this.setState({weight}, this.setBMI)
  }

  setBMI() {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2)
    this.setState({
      bmi,
      bmiClass: this.getBMIClass(bmi)
    })
    console.log(this.state)
  }

  getBMIClass(bmi) {
    if(bmi < 18.5) {
      return "Underweight"
    } else if(bmi >= 18.5 && bmi <= 24.9) {
      return "Normal"
    } else if(bmi >= 25 && bmi <= 29.9) {
      return "Overweight"
    } else if(bmi >= 30) {
      return "Obese"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>Weight</label>
            <Range value={this.state.weight} onChange={this.weightChange.bind(this)}/>
          </div>
        </form>
        <br/>
        <br/>
        <Output/>
      </div>
    )
  }
}

export default App
