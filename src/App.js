import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './redux/slides/counterSlices';

import styled from 'styled-components';
import { Button, DatePicker } from 'antd';


function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello App Ecomic</h1>
      <div>
        <DatePicker />
        <Button
          type="ghost"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <span>{count}</span>
        <Button
          type="primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </div>
    </div>
  );
}

export default App;
