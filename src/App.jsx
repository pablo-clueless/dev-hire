import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Home, Favorites, Developers } from './pages'
import { Footer, Loading, Sidebar } from './components'
import { fetchDevs } from './redux/features/devSlice'
import { fetchExchange } from './redux/features/currencySlice'
import './App.css'

const App = () => {
  const [exchangeRate, setExchangeRate] = useState(1)
  const [currencyName, setCurrencyName] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.devs)

  useEffect(() => {
    dispatch(fetchDevs())
    dispatch(fetchExchange())
  }, [])

  if(isLoading) return <Loading />

  return (
    <div className='App'>
      <Sidebar />
      <main className='container'>
        <div>
          <Routes>
            <Route path='/' element={<Home exchangeRate={exchangeRate} currency_name={currencyName} />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/developers/:id' element={<Developers />} />
          </Routes>
        </div>
        <Footer setExchangeRate={setExchangeRate} setCurrencyName={setCurrencyName} />
      </main>
    </div>
  )
}

export default App
