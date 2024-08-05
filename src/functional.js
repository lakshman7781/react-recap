import  React from 'react';
import './App.css';

const Functional = (props) => {
    const {persons} = props;
    return (
        <div className='function'>
            <h1>data!</h1>
            <ul>
                {persons.map((person, index) => (
                    <li key={index}>{person.name} - {person.age}</li>
                ))}
            </ul>
        </div>
    )
}
export default Functional;