import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      profiles : [
        {
          firstName : "Alfredo",
          lastName : "Salazar",
          role : "Mentor",
          id : 123
        },
        {
          firstName : "Daniel",
          lastName : "Di Venere",
          role : "Student",
          id : 456
        }
      ]
    }
  }
  
  render(){

    let contextValues = {
      profiles : this.state.profiles
    }
    return (
      <div>
          {/* Display the full list of Profiles */}
          {/* Add a form to add a new profile to the list  */}
      </div>
    );
  }
}

export default App;
