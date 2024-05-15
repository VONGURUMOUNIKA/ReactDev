import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = React.useState([
    {
    name : 'peter',
    age : 24,
    message: 'random message',
   },
   {
    name : 'mouni',
    age : 24,
    message: 'random message',
   },
   {
    name : 'varun',
    age : 30,
    message: 'random message',
   }
  
  ]);


  //  const changeMessage = () => {
  //   let updatedperson = [...person];
  //    //updatedperson[0] = {...updatedperson[0], age: 25 , message : 'Hello World'}
  //    setPerson(updatedperson);
  //  }

  return (
    <>
    <div>
    {person.map((person, index) => {
    <div key={index}>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    </div>
    })} </div>
    {/* <button className='btn' onClick={changeMessage}>Change Message</button>
     */}
    </>
  )
};

export default UseStateObject;
