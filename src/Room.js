import React, { useState } from "react";


function Room () {

    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(24);
    let [temperature, setTemperature] = useState(73);

    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            <p>Welcome to the room!</p>
            <br/>
            Age : {age}
            <button className="btn" onClick = {() => setAge(++age)}>+ Age</button>
            <br/>
            Temperature : {temperature}
            <button className="btn" onClick = {() => setTemperature(++temperature)}>+</button>
            <button className="btn" onClick = {() => setTemperature(--temperature)}>-</button>
            <br/>

            <button className="btn" onClick = {() => setLit(!isLit)}>Flip</button>
            <br/>

            <button className="btn on" onClick = {() => setLit(true)}>ON</button>
            <button className="btn off" onClick = {() => setLit(false)}>OFF</button>
        </div>
        
    );

}

export default Room;