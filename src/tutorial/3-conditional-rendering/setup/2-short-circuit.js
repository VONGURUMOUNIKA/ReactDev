import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {


  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

   const text = 'true';

  const [isError, setIsError] = useState(false);

  return (
    <>
    {/* <h1>{text && 'Hello World'}</h1> */}
    <button className='btn' onClick={() => setIsError(!isError)}>
      toggle error</button>

      {isError && <h1>Error...</h1>}

      {isError ? <p>There is an error....</p> : <h2>There is no error</h2> }
    </>
  )
};

export default ShortCircuit;
