import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  const decrementCount = () => setCount(count - 1);

  const resetCount = () => setCount(0);

  return <div>
    <Counter count={count}/>
    <Button onClick={incrementCount}>Increment</Button>
    <Button onClick={decrementCount}>Decrement</Button> 
    {count !== 0 && (<Button onClick={resetCount}>Reset</Button>)}
  </div>;
}

export default App;