import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Developers = () => {
  const id = useParams().id
  const { devs } = useSelector(state => state.devs)

  console.log(devs.map(dev => dev._id))

  return (
    <main>
      {/* <h1>{selectedDev._source.display_name}</h1> */}
    </main>
  )
}

export default Developers