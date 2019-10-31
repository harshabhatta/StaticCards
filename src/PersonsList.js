import React from 'react';
import Person from './Person';

const PersonsList = () => {
    const people = [
        {
            img: 20, name: 'john', job: 'developer'
        },
        {
            img: 30, name: 'smith', job: 'designer'
        },
        {
            img: 40, name: 'james', job: 'architect'
        }
    ]

    return (
        <section>
            {people.map( el => {
                return (
                    <Person person={el}/>
                )                
            })}
        </section>
    );
}

export default PersonsList;