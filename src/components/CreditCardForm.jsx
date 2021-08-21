import React, { useState } from 'react'
import CreditCard from './CreditCard'

const CreditCardForm = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [month, setMonth] = useState('Month')
  const [year, setYear] = useState('Year')
  const [code, setCode] = useState('')

  return (
    <section className="container">
      <CreditCard number={number} name={name} date={number} />
      <div className="form-container">
        <div className="card-input">
          <label>
            Card number:
            <input
              name="number"
              className="input-field"
              type="text"
              value={number}
              onChange={e => setNumber(e.target.value)}
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
              value={name}
              onChange={e => setName(e.target.value)}
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
              value={month}
              onChange={e => setMonth(e.target.value)}
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
            <select name="year" className="list" value={year} onChange={e => setYear(e.target.value)}>
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
              value={code}
              onChange={e => setCode(e.target.value)}
            />
          </label>
        </div>
        <input className="button" type="submit" value="Submit" />
      </div>
    </section>
  )
}
export default CreditCardForm
