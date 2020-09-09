import React from 'react';
import Profile from './Profile'
import CreateProfile from './createProfile'
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
        },

      ]
    }
  }
  submitProfile=(fn, ln, r)=>{

    this.setState({
      profiles: [...this.state.profiles,{
      firstName:fn,
      lastName: ln,
      role: r,
      }
      ]
    })
    console.log("here",this.state)
  }
  render(){
      let thisState =this.state.profiles
      const generateState = thisState.map((el) => 
        <ul key={el.id}>
          <li>First Name: {el.firstName}</li>
          <li>Last Name: {el.lastName}</li>
          <li>Role: {el.role}</li> 
          <br/>
        </ul> ) 
    
    return (
      <div>
          {/* Display the full list of Profiles */}
          <Profile thisState={thisState} generateState={generateState}/>
          {/* Add a form to add a new profile to the list  */}
          <CreateProfile submitProfile={this.submitProfile}/>
      </div>
    );
  }
}

export default App;
