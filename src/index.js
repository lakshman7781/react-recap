import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Class from './class';
import Functional from './functional';
import Search from './form';
import Movies from './movies';
// import Example from './sidebar';
import Navbar from './Components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persons = [
  {name: 'John', age: 30},
  {name: 'Doe', age: 25},
  {name: 'Smith', age: 20}
];
const classmates=[
  {name:"lakshman",sec:"A"},
  {name:"harsha",sec:"B"},
  {name:"siva",sec:"C"}
]

root.render(
  <React.StrictMode>
    {/* <Example /> */}
    <Navbar />
    <Search />
    <Movies initialSearch="avengers" />  
    <App />
    <Class classmates={classmates}/>
    <Functional persons={persons} />
    
  </React.StrictMode>
);


