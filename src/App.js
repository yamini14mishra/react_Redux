import React from 'react'
import './App.css';
import MyApp from './MyApp'
import { useSelector } from 'react-redux'
// import { selectCount} from './states/reducers/index'

function App() {
  // const count = useSelector(selectCount);
  const curState = useSelector((state) => state.number);
  return (
    <>
      <div style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1>React Redux</h1>
        <span className="value">{curState}</span>
        <div>
          <MyApp/>
        </div>
      </div>
    </>
  )
}

export default App
