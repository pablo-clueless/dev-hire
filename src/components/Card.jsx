import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react'

import '../styles/card.css'
import { addToFavorite, removeFromFavorite } from '../redux/features/devSlice'

const Card = ({ dev, exchangeRate, currency_logo }) => {
  const [isFavorite, setisFavorite] = useState(false)
  const dispatch = useDispatch()
  const { favorite } = useSelector(state => state.devs)

  const handleFavorite = () => {
    let selectedDev = favorite.find(item => item._id === dev._id)
    if(selectedDev) {
      dispatch(removeFromFavorite(dev))
      setisFavorite(false)
    } else {
      dispatch(addToFavorite(dev))
      setisFavorite(true)
    }
  }

  return (
    <div className='card'>
      <div className='card__header'>
        <img src={dev._source.service_photo} alt='header__image' />
        <button className={isFavorite ? 'selected' : ''} onClick={handleFavorite}>
          <Icon icon='ant-design:heart-filled' className={isFavorite ? 'icon selected' :'icon'} />
        </button>
      </div>
      <img className='card__avatar' src={dev._source.avatar} alt='avatar' />
      <div className='card__body'>
        <div className='card__content'>
          <h4 className='card__name'>{dev._source.display_name}</h4>
          <p className='card__amount'>
            {currency_logo} {(dev._source.starting_from / exchangeRate).toFixed(0)}
          </p>
        </div>
        <Link to={`/developers/${dev._id}`}>
          Hire
        </Link>
      </div>
    </div>
  )
}

export default Card