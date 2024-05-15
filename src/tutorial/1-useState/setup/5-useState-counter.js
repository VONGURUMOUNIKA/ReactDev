import React, { useState } from 'react';




const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const reset = () => {
   setValue(0);
  }
  return (
    <>
    <section style={{margin: '4rem 0'}}>
    <div>
      <h2 className='text'>Result</h2>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>Increase</button> 
      <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
    </section>
    </>
  )
};

export default UseStateCounter;
