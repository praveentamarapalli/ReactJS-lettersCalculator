// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    letters: 0,
  }

  onChangeInput = event => {
    this.setState({letters: event.target.value.length})
  }

  render() {
    const {letters} = this.state
    const result = `No.of letters: ${letters}`
    return (
      <div className="container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="text" htmlFor="label">
            Enter the phrase
          </label>
          <div>
            <input
              type="text"
              id="label"
              placeholder="Enter the Phrase"
              className="input"
              onChange={this.onChangeInput}
            />
          </div>
          <p className="result">{result}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
