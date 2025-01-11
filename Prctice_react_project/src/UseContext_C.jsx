//useContext()= Rreact Hook thhat allows you to share values between 
//              multiple values of components witthout passing props thhrough each level

import React,{useContext} from "react";
import { UserContext } from "./UseContext_A";// UseContext_A use karpu eka methana import karrala 
import UseContextD from "./UseContext _D";


function UseContextC(){

        const user = useContext(UserContext);// methana eka add karraganna ona
    
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Now U Go To D ${user}`}</h2>
            <UseContextD/>

        </div>
    )

}

export default UseContextC;