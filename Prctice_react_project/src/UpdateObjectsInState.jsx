import React,{useState} from 'react'

function UpdateObjectInState(){

const [car,setCar] = useState({ year:2024,
                                make:"Benz",
                                model:"BMW"   });


function handelYearChange(event){
    //setCar({year:2024 ,make:"Ford",model:"BMW",year:2025});//js dosent allow duplicate keys

    setCar(c => ({...c,year:event.target.value}));// ckiyala danne car eke 11 st letter eka
}

function handelMakeChange(event){
    setCar(c =>({...c,make:event.target.value}));
    
}
function handelModelChange(event){
    setCar(c =>({...c,model:event.target.value}));

}

return(
    <div>

        <p>Your Favarite Car is : {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handelYearChange}/> <br />
        <input type="text" value={car.make} onChange={handelMakeChange}/> <br />
        <input type="text" value={car.model} onChange={handelModelChange}/> <br />
    </div>
);

}

    export default UpdateObjectInState 