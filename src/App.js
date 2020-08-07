import React from 'react';
import './App.css';
import AppContext from './AppContext';
import Profile from './Profile';

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
        <AppContext.Provider value={contextValues}>
          <Profile />
          {/* Display the full list of Profiles */}
          {/* Add a form to add a new profile to the list  */}
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
