//useContext()= Rreact Hook thhat allows you to share values between 
//              multiple values of components witthout passing props thhrough each level

import React,{useContext} from "react";
import { UserContext } from "./UseContext_A";// UseContext_A use karpu eka methana import karrala 

function UseContextD(){

    const user = useContext(UserContext);// methana eka add karraganna ona

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )

}

export default UseContextD;