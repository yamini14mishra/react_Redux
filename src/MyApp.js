import React, {useState} from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { Inc, Dec, incrementByAmount,incrementAsync} from './states/reducers/index'

function MyApp() {
  
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
    <>
      <div className="row" >
        <button className="button" onClick={()=> dispatch(Inc(10))} > + </button>
        <button className="button" onClick={()=> dispatch(Dec(10))} > - </button>
      </div>
      <div className="row">
        <input className="textbox" aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
        <button className="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button className="button" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </button>
      </div>
    </>
  )
}

export default MyApp
