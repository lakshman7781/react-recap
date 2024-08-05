import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Class from './class';
import Functional from './functional';

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
    <App />
    <Class classmates={classmates}/>
    <Functional persons={persons} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
