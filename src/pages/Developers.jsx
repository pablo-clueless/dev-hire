import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../styles/developers.css'

const Developers = () => {
  const id = useParams().id
  const { devs } = useSelector(state => state.devs)

  let dev = devs.find(dev => dev._id === id)
  console.log(dev)

  return (
    <main className='dev__page'>
      <div className="header">
        <div className="header__image">
          <img src={dev?._source.service_photo} alt={dev?._source.display_name} />
        </div>
        <img className="avatar" src={dev?._source.avatar} alt={dev?._source.display_name} />
        <div className="header__details">
          <h2>
            {dev?._source.display_name}
            <span>{dev?._source.service_expression}</span>
          </h2>
          <span>{dev?._source.category_description}</span>
          <h4>{dev?._source.location.city},{dev?._source.location.country}</h4>
        </div>
        <div className="header__content">
          <p><span>Level Score: </span>{dev?._source.level_score}</p>
          <p><span>Services: </span>{dev?._source.service}</p>
          <p><span>Category: </span>{dev?._source.category}</p>
          <p>
            <span>Languages: </span>
            {dev?._source.languages.map(language => (<i key={language}>{language}</i>))}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Developers