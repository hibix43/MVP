import React from 'react'
import PropTypes from 'prop-types'

let inputFile

const LoadForm = () => (
  <form onSubmit={ this.props.onClick(inputFile) }>
    <input type="file" size="30" ref={ input => {inputFile = input} } />
    <button type="submit">Load</button>
  </form>
)

LoadForm.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default LoadForm