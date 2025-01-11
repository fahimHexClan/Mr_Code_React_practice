
//useEffect() =React Hook that React Do Some Code when(pick One):
//              this component re-renders
//              this component mounts
//              the state of value
//

//useEffect(function , [dependencies])

//1.useEffectt(() => {})   //Runs aftter every render
//2.useEffectt(() => {},[])   //Runs Only on mount
//3.useEffectt(() => {},[value])   //Runs on mount + when value changes


//USES
//#1 Event Listners
//#2 DOM Manipulation
//#3 Subscriptions(real time updates)
//#4 Fetching Data From an Api
//#5 Clean Up when  a componunt unmounts

import React,{useState,useEffect} from "react"



function UseEffect(){
    // tittle change karanna use kare

   {/* const [count , setCount] = useState(0);
    const [color , setColor]= useState("green");

    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;

        return () =>{
            //some cleanup codes
        }
    },[count,color]);
    
    function addCount(){
        setCount(c => c + 1);

    }
    function SubCount(){
        setCount(c => c - 1);

    }
    function ChangeColor(){
        setColor(c => c === "green" ? "red":"green");

    } */}

    //===================dn page eke widt hide cange karanna hadanne==================================

const [width , setWidth]= useState(window.innerWidth);
const [height , setHight] = useState(window.innerHeight);

useEffect(()=>{
    window.addEventListener("resize", handleResize);
    console.log("Event Listner Added");

return()=>{
    window.addEventListener("resize", handleResize);
    console.log("Event Listtner Rremoved")
}

},[]);

useEffect(()=>{
document.title =`Size:${width} x ${height}`;// titlle ekatth wenas wenna
},[width,height]);

function handleResize(){
    setWidth(window.innerWidth);
    setHight(window.innerHeight);
}



return(

   /* 
   <div>
        <p style={{color: color}}> Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={SubCount}>Sub</button><br />
        <button onClick={ChangeColor}>ChangeColor</button><br />
    </div>
    */

    <div>
            <p>Window Width: {width}px</p>
            <p>Window height: {height}px</p>

    </div>

);

}

export default UseEffect