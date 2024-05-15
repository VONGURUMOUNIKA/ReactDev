import React from 'react';

const ErrorExample = () => {
  
   let title = 'random title';
  
  const handleClick = () => {
    title = "title changed"; 
    console.log(title);
  }
   

  return (
   <React.Fragment>
    <h2>{title}</h2>
    <button onClick={handleClick} className='btn'>Click Me</button>
   </React.Fragment>

  );
};

export default ErrorExample;
