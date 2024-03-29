import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../styles/developers.css'

const Developers = ({ exchangeRate, currency_name}) => {
  const id = useParams().id
  const { devs } = useSelector(state => state.devs)

  let dev = devs.find(dev => dev._id === id)
  // console.log(dev)

  const unixToUTC = (value) => {
    let date = new Date(value * 1000)
    let dateString = date.toLocaleDateString()
    return dateString
  }

  const handleClick = () => {
    let reply = confirm('Do you want to hire this developer?')
    if(reply) {
      alert('You need to have an account to proceed')
    }
  }

  return (
    <main className='dev__page'>
      <div className="header">
        <div className="header__image">
          <img src={dev?._source.service_photo} alt={dev?._source.display_name} />
        </div>
        <img className="avatar" src={dev?._source.avatar} alt={dev?._source.display_name} />
        <div className="status__bar">
          <div className="header__details">
            <h2>
              {dev?._source.display_name}
            </h2>
            <span>{dev?._source.category_description}</span>
            <h4>{dev?._source.location.city}, {dev?._source.location.country}</h4>
          </div>
          <button type='button' onClick={handleClick}>
            Hire
          </button>
        </div>
        <div className="header__content">
          <p>
            <span>Hire: </span>
            {currency_name}{' '}
            {(dev?._source.starting_from / exchangeRate).toFixed(2)}
          </p>
          <p><span>Notice Period: </span>
            {dev?._source.notice_period_in_hours}hrs
          </p>
          <p><span>Date Joined: </span>
          {unixToUTC(dev?._source.joined_since)}
          </p>
          <p><span>Level Score: </span>{dev?._source.level_score}</p>
          <p><span>Services: </span>{dev?._source.service}</p>
          <p><span>Category: </span>{dev?._source.category}</p>
          <p>
            <span>Languages: </span>
            {dev?._source.languages.map(language => (<i key={language}>{language}</i>))}
          </p>
          <p>
            <span>Skillss: </span>
            {dev?._source.skills.map(skill => (<i key={skill}>{skill}{', '}</i>))}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Developers