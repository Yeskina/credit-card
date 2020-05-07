import React from 'react'
import CreditCard from './credit-card'

import '../index.scss'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      name: '',
      date: '',
      month: 'Month',
      year: 'Year',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.getAttribute('name')]: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <CreditCard number={this.state.number} name={this.state.name} date={this.state.date} />
        <div className="smaller-container">
          <div className="card-input">
            <label>
              Card number:
              <input
                name="number"
                className="input-field"
                type="text"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="card-input">
            <label>
              Card Holders:
              <input
                name="name"
                className="input-field"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="container-row">
            <div className="date">
              <label htmlFor="months" className="expiration-date">
                Expiration date:
              </label>

              <select
                name="month"
                id="months"
                className="list"
                value={this.state.month}
                onChange={this.handleChange}
              >
                <option value="month">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select
                name="year"
                className="list"
                value={this.state.year}
                onChange={this.handleChange}
              >
                <option value="year">Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <label>
              CVV:
              <input
                name="code"
                className="list"
                type="text"
                value={this.state.code}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </div>
    )
  }
}
