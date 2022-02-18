import { Component, createElement } from "react";

import "./ui/ScannerInputWeb.css";

export default ({action, attribute, class:className}) => {
    console.log()
    const executeAction = () => {
        console.log("yippee! " + attribute.value);
        action.execute();
    }
    const handleOnChange = (e) => {
        if (e.nativeEvent.inputType==='insertText' || e.nativeEvent.inputType==='deleteContentBackward'){
            attribute.setValue(e.target.value);
        }
        else {
            attribute.setValue(e.target.value);
            executeAction();
        }
        console.log(e)
    }
    const handleOnKeyPress = (e) => {
        if (e.key === "Enter"){
            executeAction();
        }
    }
    return <div className={className}>
        <input value={attribute.value} onChange={handleOnChange} onKeyPress={handleOnKeyPress} className="form-control" />
    </div>
    
};
