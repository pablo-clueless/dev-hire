import React from 'react'

import { Card } from './index'
import '../styles/layout.css'

const Layout = ({ heading, data, exchangeRate, currency_name }) => {

  return (
    <main className='layout'>
      <h1>{heading}</h1>
      <section className='layout__content'>
        {data?.map(dev => (
          <Card key={dev._id} dev={dev} exchangeRate={exchangeRate} currency_logo={currency_name} />
        ))}
      </section>
    </main>
  )
}

export default Layout