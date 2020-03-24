
import React from 'react';
import logo from '../logo.svg';
import '../App.css';

class HelloPerson extends React.Component {
      constructor(props) {
        super(props);
        this.state = { name: "Sara", inputName: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


     render() {
       return (
         <div className="Hello-Person">
         <HelloWorld name={this.state.name} />
         <form className="Centered-Content" onSubmit={this.handleSubmit}>
             <label htmlFor="input-name">Enter a name: </label>
             <input id="input-name" onChange={this.handleChange}></input>
             <button >Update text</button>
         </form>
         </div>
       )
       }

     handleChange(e) {
        this.setState({ inputName: e.target.value });
     }

     handleSubmit(e) {
        e.preventDefault();
        this.setState({ name: this.state.inputName });
     }

}

function HelloWorld(props){
         return (
             <p>Hello {props.name}!</p>
         )
}

export default HelloPerson;