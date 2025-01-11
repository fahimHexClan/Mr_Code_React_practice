//useState() = Re renders the component whhen thhe statte value changes

//useRef() = "use Refferance" Does not cause re_renders wen its value changes.
//             when u want a component to "remember" some information,butt u dont want  that information to trigger new renders


// 1.Accessing/Interacting withh Dom elements
//2. Handling Focus, Animation and Transittions
//3.Managing Timers and Inttrevels

import React, {useState, useEffect,useRef} from "react";

function UseRef(){
const inputRef1 =useRef(null);
const inputRef2 =useRef(null);
const inputRef3 =useRef(null);


useEffect(() => {
    console.log("Component Rendered")
});

function handleClick1(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="Yellow";
    inputRef2.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";


}
function handleClick2(){
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor="Green";
    inputRef1.current.style.backgroundColor="";
    inputRef3.current.style.backgroundColor="";

}
function handleClick3(){
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor="Blue";
    inputRef1.current.style.backgroundColor="";
    inputRef2.current.style.backgroundColor="";


}

return(
<div>
    <button onClick={handleClick1}>Click Me 1</button>
    <input ref={inputRef1} />

    <button onClick={handleClick2}>Click Me 1</button>
    <input ref={inputRef2} />

    <button onClick={handleClick3}>Click Me 1</button>
    <input ref={inputRef3} />

    

</div>

)



}
export default UseRef;