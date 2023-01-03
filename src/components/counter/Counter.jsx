// build out a counter which will have a plus and minus button + a span element that will take its value from a count state variable. create two functions taht will work as onclick event listeners that will increment and decrement the counter
// hard mode leave the count inside app.jsx

import React from 'react'
import { useState } from 'react'
// useState can take a raw value but also a callback function
// raw value will recalculate value everytime
// callback function renders initial value ONCE <usestatw(() => 4)

function Counter(props) {
    // function iCount(){
    //     console.log("runs during rerender")
    //     return 4
    // }
    let [ count, setCount ] = useState(0)

    // let [ count, setCount ] = useState(() => 
    //     console.log("only runs once")
    //     return 4
    // )

    function increment(){
        // setCount(count +1)
        setCount(prevCount => prevCount +1)
        
    }
    function decrement(){
        // prevCount is a parameter allowing access to prior value before rerender
        // syntacticaly it has to be prev<state>
        setCount(prevCount => prevCount -1)
        
    }
  return (
    <div>

        <button className='button' onClick={increment}> +</button>
        <span> {count} </span>
        <button className='button' onClick={decrement}>-</button>

    </div>
  )
}

export default Counter