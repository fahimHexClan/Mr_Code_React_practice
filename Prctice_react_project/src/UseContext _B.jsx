//useContext()= Rreact Hook thhat allows you to share values between 
//              multiple values of components witthout passing props thhrough each level

import React,{useContext} from "react";
import { UserContext } from "./UseContext_A";// UseContext_A use karpu eka methana import karrala 
import UseContextC from "./UseContext_C";

function UseContextB(){

            const user = useContext(UserContext);// methana eka add karraganna ona .....
    
    return(
        <div className="box">
            <h1>Component B</h1>
            <h2>{`Now U Go To C ${user}`}</h2>

            <UseContextC/>
        </div>
    )

}

export default UseContextB;