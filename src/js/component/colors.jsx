import React from "react";
import { useState, useEffect } from "react";

const Colors = () => {
    const [selectedColor, setSelectedColor] = useState("red")

    return (
        <div className="traffic-light">
            <div className={"light red" + (selectedColor==="red" ? " glow": "")} onClick={() => setSelectedColor("red")}></div>
            <div className={"light yellow" + (selectedColor==="yellow" ? " glow": "")}onClick={() => setSelectedColor("yellow")}></div>
            <div className={"light green" + (selectedColor==="green" ? " glow": "")}onClick={() => setSelectedColor("green")}></div>
        </div>
    )

      
    
}

export default Colors;