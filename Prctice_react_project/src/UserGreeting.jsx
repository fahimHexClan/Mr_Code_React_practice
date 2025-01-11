
function UserGreetings(props){ // component kiyanne api hadana jsx file ekata
{/*allows u 2 control what gets rendered in your application based on certain conditions (show ,hide or change component)*/}


{/*Using tenary operator*/} 

{/*return(props.isLoggedIn ? <h1>Welcome {props.username}</h1> : <h1>Dosent match</h1>)*/}



  {/* if(props.isLoggedIn){
    return <h1 className="welcomeMessage">Welcome{props.username}</h1>
   }
   else{
    return <h1 className="ErorMessage">Dosent match {props.username}</h1>
   }*/} 


const WelcomeMessage=   <h1 className="welcomeMessage">
                        Welcome{props.username}
                        </h1>

const ErrorMessage =  <h1 className="ErorMessage">
                      Dosent match {props.username}
                      </h1>

return(props.isLoggedIn ? WelcomeMessage : ErrorMessage);

}

export default UserGreetings