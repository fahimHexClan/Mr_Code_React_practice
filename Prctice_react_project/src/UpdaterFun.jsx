import React,{useState} from 'react'

function UpdateFun(){

const [count, setCount] = useState(0);

const increment = () => {
   // setCount(count + 1);
   setCount(c => c+1);// count kiyala dannatuva varible eka 1st latter eka danna puluwan
   setCount(c => c+1);
   setCount(c => c+1);// metheana 3 parak dapu hindha eya 3park count +++ karranawa

}

const decrement = () => {
   // setCount(count - 1);
   setCount(c => c-1);
   setCount(c => c-1);
   setCount(c => c-1);


}

const reset = () => {
    //setCount(0);
    setCount(c => c=0)
}

    return(
            <div className='Counter'>

                <p className='count-display'>{count}</p>

                <button className='counter-button' onClick={increment}>Increment</button>

                <button className='counter-button' onClick={decrement}>Decrement</button>

                <button className='counter-button' onClick={reset}>Reset</button>


            </div>

    );
}

export default UpdateFun