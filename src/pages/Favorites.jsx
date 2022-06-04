import React from 'react'
import { useSelector } from 'react-redux'

import { Layout } from '../components'

const Favorites = () => {
  const { favorite } = useSelector(state => state.devs)

  return (
    <div>
      <Layout heading='Favorites' data={favorite} />
    </div>
  )
}

export default Favorites