import React from 'react'

export default class createProfile extends React.Component{

    onSubmit =(e)=>{
        let fn =e.target.firstName.value    
        let ln =e.target.lastName.value
        let r =e.target.Role.value
        e.preventDefault()
        this.props.submitProfile(fn, ln, r)
        e.target.firstName.value=''
        e.target.lastName.value=''
        e.target.Role.value=''
    }

    render(){
        return(

                <form onSubmit={this.onSubmit} className="submitBox">
                    <label>
                    Make a profile for yourself!:
                    <br/>
                    <input type="text" name="firstName" placeholder="First Name"/>
                    <br/>
                    <input type="text" name="lastName" placeholder="Last Name"/>
                    <br/>
                    <input type="text" name="Role" placeholder="Role Name"/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
        )
    }
}