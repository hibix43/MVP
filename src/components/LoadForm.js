import React from 'react'
import PropTypes from 'prop-types'

const LoadForm = props => (
  <input type="file" onChange={e =>
    props.onLoadVideo(e.target.files[0].path)} />
)

LoadForm.propTypes = {
  props: PropTypes.shape({
    onLoadVideo: PropTypes.func.isRequired
  })
}

export default LoadForm