import React from 'react'

function Button({children, version, type, isDisabled }) {
  return (
    <button className= {`btn btn-${version}`} type={type} isdisabled= {isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isdisabled: false   
}


export default Button
