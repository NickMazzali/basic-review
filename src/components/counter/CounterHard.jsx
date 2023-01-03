import React from 'react'

function CounterHard({count,setCount}) {
    function inccount(){
        setCount(count +1)
    }
    function deccount(){
        setCount(count -1)
    }
  return (
    <div>

    <button className='button' onClick={inccount}> +</button>
    <span> {count} </span>
    <button className='button' onClick={deccount}>-</button>

</div>
  )
}

export default CounterHard