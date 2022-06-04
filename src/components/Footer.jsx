import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import '../styles/footer.css'

const Footer = ({ setExchangeRate, setCurrencyName }) => {
  const [value, setValue] = useState('Naira')
  const [currency, setCurrency] = useState('Naira')
  const { currencies } = useSelector(state => state.currency)
  
  useEffect(() => {
    let currency
    if(value !== '') {
      currency = currencies.currencies?.find(currency => currency.name === value)
    }
    setExchangeRate(currency?.divider)
    setCurrencyName(currency?.short)
    setCurrency(currency)
  },[value])

  return (
    <footer className='footer'>
      <p>
        &copy; 2022 DevHire
      </p>

      <div className="select">
        <img src={currency.flag_url} alt={currency.name} />
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          {currencies.currencies?.map(currency => (
            <option key={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
    </footer>
  )
}

export default Footer