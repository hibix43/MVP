import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ path }) => (
  <video width="500" height="300" controls loop>
    <source src={path}/>
  </video>
)

Video.protoTypes = {
  path: PropTypes.string.isRequired
}

export default Video