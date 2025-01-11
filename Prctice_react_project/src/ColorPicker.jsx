import React, {useState} from 'react';

function ColorPicker(){

const[color, setColor] = useState();

function handleColorChange(event){
    setColor(event.target.value)
}

return(
    <>
<div className='color-picker-container'>
    <h1>Color Picker</h1>

    <div className='color-display' style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
    </div>

    <div>
        <label className='color-lable'> Selec A Color</label>
        <input  type="color" value={color} onChange={handleColorChange} />
    </div>


</div>
    
    
    
    
    </>
)
}

export default ColorPicker