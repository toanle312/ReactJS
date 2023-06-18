// import './App.css';
import { useState, useEffect, useRef } from 'react';


function App() {
  const [count, setCount] = useState(60);
  const [start, setStart] = useState(false);

  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ref.current);
  });

  const handleStart = () => {
    if(!start){
      timerId.current = setInterval(() => {
        setCount(prev => prev - 1);
      }, 1000)
      setStart(!start);
    }
  };
  
  const handleStop = () => {
    if(start){
      clearInterval(timerId.current);
      setStart(!start);
    }
  };

  console.log(count, prevCount.current);

  return (
    <div className="App" style={{padding: '20px'}}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart} disabled={start}>Start</button>
      <button onClick={handleStop} disabled={!start}>Stop</button>
    </div>
  );
}

export default App;
