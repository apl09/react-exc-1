import React from 'react';

const Person = (props) => {
  return (
    <div>
      <span>Hello {props.name} </span>
      <span>{props.surname} of </span>
      <span>{props.age} years old</span>
    </div>
  );
};

export default Person;
