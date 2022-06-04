import React from 'react'
import { useSelector } from 'react-redux'

import { Layout } from '../components'

const Favorites = ({ exchangeRate, currency_name }) => {
  const { favorite } = useSelector(state => state.devs)

  return (
    <div>
      {favorite?.length === 0 ? 
      <div className='layout'>
        <h1>Favorites</h1>
        <section className='layout__content'>
          <div className='error'>
            <p>No Favorites</p>
          </div>
        </section>
      </div> :
      <Layout heading='Favorites' data={favorite} exchangeRate={exchangeRate} currency_name={currency_name} />}
    </div>
  )
}

export default Favorites