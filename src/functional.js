import  React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

const Functional = (props) => {
    const {persons} = props;
    const name="John";
    const show=true;
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     alert('count is updated');
    // },[count]);
    return (
        <>
        <div className='function'>
            <h1>{show? name:"someone"}</h1>
            {/* <div>
                <p color='blue'>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div> */}
            <ul>
                {persons.map((person, index) => (
                    <li key={index}>{person.name} - {person.age}</li>
                ))}
            </ul>
            { name?(
                <div>
                    <p>name: {name}</p>
                    <p>age: {persons[0].age}</p>
                </div>
            ):(
                <div>
                    <p>nothing here</p>
                </div>
            )
            }
        </div>
        </>
    )
}
export default Functional;