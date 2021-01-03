import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component  {
  state ={
    username : "Richal",
  };

  userNameHandler =(event)=>{
    this.setState({
      username: event.target.value,
    })
  };
  render(){
    return (
      <div className="App">
          <ol>
            <li className="Red">Create TWO new components: UserInput and UserOutput</li>
            <li className="Red">UserInput should hold an input element, UserOutput two paragraphs</li>
            <li className="Red">Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li className="Red">Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li className="Red">Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li className="Red">Add a method to manipulate the state (=> an event-handler method)</li>
            <li className="Red">Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li className="Red">Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li className="Red">Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>

          <UserInput change={this.userNameHandler} currentName={this.state.username}>Add user Name</UserInput>
          <UserOutput userName={this.state.username}> </UserOutput>
          <UserOutput userName={this.state.username}> </UserOutput>
          <UserOutput userName="Hansa Parmar"> </UserOutput>
        </div>
    );
  };
};

export default App;


