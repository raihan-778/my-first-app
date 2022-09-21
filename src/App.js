
// import { Counter, setCount} from 'react';

import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  
  return(
    <div className='App'>
      <Countries></Countries>
    </div>
    
  )
  

}

// function Counter(){
//   const [count, setCount] = useState(55)
//   const increaseCount =()=>setCount(count+1)
//   const decreaseCount =()=>setCount(count-1)
//   //  const newCount =count+1
  
  

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={decreaseCount}>Decrease</button>
//       <button onClick={increaseCount}>Increase</button>
      
//     </div>
//   )
// }
export default App;
