import React,{useState} from 'react';
function MyComponent(){

    //let [name,setName] =useState();
    const [name,setName] =useState("Guest");// default meka show wenawa click karama araka show wenawa
    const [age,setAge] =useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
       // name="Fahim";
       setName("Faslan");
        console.log(name);
    }
    const updateAge = () => {
        // name="Fahim";
        setAge(23);
         console.log(age);
     }
     const increementAge = () => {
        setAge(age+1);
     }
     const toggleEmployeeStatus =()=>{
        setIsEmployed(!isEmployed)
     }

     return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>
            

            <p>Age:{age}</p>
            <button onClick={increementAge}>Set Age</button>

            <p>Is Employee:{isEmployed ? "YES" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Status isEmployed</button>
        </div>


     );
}

export default MyComponent