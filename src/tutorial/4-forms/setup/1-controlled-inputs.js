import React, { useState } from 'react';
// In JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// In React
// value, onChange

const ControlledInputs = () => {
   
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const[people, setPeople] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(firstName && email){
      const person = {id: new Date().getTime().toString(), firstName,email};
      //console.log(person)

      setPeople((people) => {
        return [... people,person];
      })
    } else {
      console.log("empty value(s)");
    }

    console.log(people);
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
         <label htmlFor='firstName'>Name :</label>
         <input 
         type='text' 
         id='firstName' 
         placeholder='Enter your name here'
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)
         }
         />
        </div>
        <div className='form-control'>
         <label htmlFor='email'>email :</label>
         <input 
         type='email' 
         id='email' 
         placeholder='Enter your email id here'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
        </div>
        <button type='submit' >Add person</button>
        </form>
        
        {people.map((person)=>{
          const {id,firstName,email} = person;
          return
        })}
      </article>
   
    </>
  )
};

export default ControlledInputs;
