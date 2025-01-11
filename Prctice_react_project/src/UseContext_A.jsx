//useContext()= Rreact Hook thhat allows you to share values between 
//              multiple values of components witthout passing props thhrough each level


// props walata amatarawa use karana ekak
import React, {useState, createContext} from "react";
import UseContextB from "./UseContext _B";

export const UserContext= createContext();

function UseContextA(){

const [user , setUser]=useState("FAHIM");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`HELLO ${user}`}</h2>
            <UserContext.Provider value={user}>
            <UseContextB user={user}/>
            </UserContext.Provider>
            

        </div>
    )

}

export default UseContextA;