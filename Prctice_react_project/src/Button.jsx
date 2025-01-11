
function Button(){

//const handleClick=() => console.log("OUCH!")
//const handleClick2=(name) => console.log(`${name} Stop Click Me!`)

/*
let count =0 ;
const handleClick=(name) =>{
    if(count <5){
        count++;
        console.log(`${name} You Click Me! ${count} time/s`)

    }
    else{
        console.log(`${name} Stop Click Me! `)
    }
        */

    const handleClick =(e) =>e.target.textContent="OUICH";//e kiyala danne event listnerta ,clicck me wela itapsse click karama eya chage wenawa




    return(

          //  <button onClick={()=>handleClick2("Fahim")}>Click Me smile</button>
            //<button onClick={()=>handleClick()}>Click Me smile</button>

            // <button onClick={()=>handleClick("Fahim")}>Click Me smile</button>
            <button onClick={(e)=>handleClick(e)}>Click Me smile</button>


    );
}

export default Button