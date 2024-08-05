import React  from "react";
import './App.css';

class Class extends React.Component {
    render() {
        const {classmates} = this.props;
        return (
            <div className="class">
                <h1>Hello World!</h1>
                <ul>
                    {classmates.map((classmate, index) => (
                        <li key={index}>{classmate.name} - {classmate.sec}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Class;