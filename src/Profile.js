import React from 'react';
import AppContext from './AppContext';

/* Importing context with a class compoenent  
export default class Profile extends React.Component{
    static contextType = AppContext;
    render (){
        console.log( this.context );
        let allProfiles = this.context.profiles;
        return(
            <div>
                {allProfiles.map( profile => {
                    return( 
                        <> 
                            <h1> This is the profile of {profile.firstName} {profile.lastName} </h1>
                            <p> At Thinkful he is a {profile.role} </p>
                        </>
                    );
                    
                })}
                
            </div>
        );
    }
}

*/

/* Importing context with a functional component  */
export default function Profile(props){
    console.log(props);
    return(
        <AppContext.Consumer>
            {
                function contextStuff(context){
                    console.log( context );
                    let allProfiles = context.profiles;
                    
                    return (
                        <div>
                            {allProfiles.map( profile => {
                                return( 
                                    <> 
                                        <h1> This is the profile of {profile.firstName} {profile.lastName} </h1>
                                        <p> At Thinkful he is a {profile.role} </p>
                                    </>
                                );
                                
                            })}
                            
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    );

}