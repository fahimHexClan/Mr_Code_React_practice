import React, {useState} from "react";
function UpdatteArraysInState(){

    const [foods, setFoods]= useState(["Apple","Orange","Banana"]);

    function handleFood (){
            const newFood= document.getElementById("foodInput").value;
            document.getElementById("foodInput").value="";// data add unama passe refresh wenna meka use karanne
   
            setFoods([...foods,newFood]);
        }       


    function handleRemoveFood (index){
        setFoods(foods.filter((_, i)=> i !== index));
        

    }
    return(
            <div>
                <h1>List Of Foods</h1>
                <ul>
                    {foods.map((foods, index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>{foods}</li>)} {/*arrays count eka anuwa list eka hedanawa, key value danan ona array use karranakota */}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter Food Name" />
                <button onClick={handleFood}>Add Food</button>

            </div>

    );
}

export default UpdatteArraysInState