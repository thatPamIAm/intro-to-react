import React from 'react';

const Greeting = ({villainName, compliment}) => {

  return (
    <div>
      <h2>Welcome, {villainName}</h2>
      <p>{compliment}</p>
    </div>
  )
}

export default Greeting;
