import { useState } from 'react'
import "./counterpage.css"


export default function CounterPage() {

  let [countNum, setCount] = useState(0);
  let increaseValue = () => {
    // function to increase the value
    setCount((countNum += 1)); //increases the count by 1
  }
  let decreaseValue = () => {
    // function to decrease the value
    // condition to ensure the count stays a positive number 

    setCount((countNum -= 1));

  }
  let resetValue = () => {
    // function to reset the value to 0
    setCount(0); //resets the count to 0
  };
  return (
    <div className="counter">
      <div>

        <div className='count'>
          <h3 id='counter-value'>{countNum}</h3>
          <button id='increase-button' onClick={increaseValue}>+</button>
          <button id='decrease-button' onClick={decreaseValue}>-</button>
          <button id='reset-button' onClick={resetValue}>reset</button>
        </div>

      </div>
    </div>
  )
}
