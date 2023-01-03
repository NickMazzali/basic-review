import React from 'react'

function welcome(props) {
    // ! props cannot be modifed. they are "read only"

    function removeName() {
        let updatedNames = props.allNames.filter(name => name !== props.name)
        props.updatedNames(updatedNames)
    }

  return (
    <div onClick={removeName} className='welcome'>welcome, {props.name} </div>
  )
}

export default welcome