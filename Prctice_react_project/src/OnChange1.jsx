import React, { useState } from 'react';

function OnChange1() {

    const [name, setName] = useState("Fahim");
    const [quantity, setQuantity] = useState(100);
    const [cmnt, setCmnt] = useState()
    const [payment, setPayment] = useState("Gift Card")
    const [shipping, setShipping] = useState("Delivery")


    function handleChange(event)  {
        setName(event.target.value); // Update the state with the current input value
    };

    function QtyChange(event)  {
        setQuantity(event.target.value); 
    };
    function CmntChange(event)  {
        setCmnt(event.target.value); 
    };
    function PaymentChange(event)  {
        setPayment(event.target.value); 
    };
    function HandleShippingChange(event)  {
        setShipping(event.target.value); 
    };


    return (
        <div>
            <input value={name} onChange={handleChange} />
            <p>Current Name: {name}</p>

            <input type='number' value={quantity} onChange={QtyChange} />
            <p>Current QTY: {quantity}</p>

            <textarea type='' value={cmnt} onChange={CmntChange} placeholder='Enter delivery instructions'/>
            <p> Current: {cmnt}</p>

            <select value={payment} onChange={PaymentChange}>
                <option value="">Select In Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
            </select>
            <p> Current: {payment}</p>


            <label>
                <input type="radio" value="Pick Up"  checked={shipping==="Pick Up"} onChange={HandleShippingChange}/>
                 PickUp
            </label> <br /> <br />

            <label>
                <input type="radio" value="Delivery"  checked={shipping==="Delivery"} onChange={HandleShippingChange}/>
                Delivery
            </label>
            <p> Current: {shipping}</p>


        </div>
    );
}

export default OnChange1;
