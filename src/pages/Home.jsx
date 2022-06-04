import React from 'react'
import { useSelector } from 'react-redux'

import { Layout } from '../components'

const Home = ({ exchangeRate, currency_name }) => {
  const{ devs } = useSelector(state => state.devs)

  return (
    <Layout heading='Hire Top Developers' data={devs} exchangeRate={exchangeRate} currency_name={currency_name} />
  )
}

export default Home