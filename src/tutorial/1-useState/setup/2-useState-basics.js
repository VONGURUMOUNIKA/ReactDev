import React, { useState } from 'react';


// Every hook starts with 'use'
// Components must be in Uppercase
// don't call hooks conditionally 
// invoke inside components body

const UseStateBasics = () => {

  const [text, setText] = useState("random title");   // text = 'random title'

  
  const handleClick = () => {
    // setText("title Changed"); // text = title Changed;

    if (text === 'random title') {
      setText('title changed');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={handleClick}>Change Title</button>
    </React.Fragment> 
   )
};

export default UseStateBasics;
