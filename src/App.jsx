import './App.css'
import Counter from './components/counter'
import Card from './components/card'
import Button from './components/Button';
import { useState } from 'react';



function App() {

  // const [count, setCount] = useState(0);
  // function handleclick() {
  //   setCount(count + 1);
  // }
  const [count, setCount] = useState(0);
  function handleclick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>kela pav</h1>
      {/* <h1>{count}</h1>
      <Button handleclick={handleclick} text="click me">
      </Button> */}
       {count}  
      <Button handleclick={handleclick} text="click me">
      </Button>
    </div>
  )
}
//  <Card name="rated-r">
//     <h1>rated-r superstar</h1>
//     <p>g.o.a.t</p>
//     <p>powerfull.</p>
//   </Card>
//   <Card children="bhago">
//     {/* <p>i'm from second tag</p> */}
//   </Card>
export default App
