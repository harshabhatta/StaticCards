import React from 'react';
import '../src/Person.css';

const Person = (props) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${props.person.img}.jpg`;
  
    return (
      <div className="person">
        <img src={url} alt=''/>
        <div>
          <h4>{props.person.name}</h4>
          <h4>{props.person.job}</h4>
        </div>
      </div>
    );
  }

export default Person;