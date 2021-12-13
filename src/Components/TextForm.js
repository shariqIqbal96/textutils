import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const toUppercase = ()=>{
        let newText = text.toUpperCase();
        if (newText.length > 0) {
            setText(newText);
            props.alertMessage('Changed to uppercase!!');
        } 
    }

    const toLowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alertMessage('Changed to lowercase!!');
    }

    const removeSpaces = () => {
        // let newText = text.replace(/\s+/g,' ');
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alertMessage('Removed extra spaces!!');
    }

    const copyText = () => {
        let copyText = document.getElementById("myBox");
        navigator.clipboard.writeText(copyText.value);
        props.alertMessage('Copied to clipboard!!');
    }

    const clearText = () => {
        setText("");
    }

    return (
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Enter your text to analyse:</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white',cursor:'-webkit-grab'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={toUppercase}>Convert to uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={toLowercase}>Convert to lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={removeSpaces}>Remove spaces</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={copyText}>Copy text</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={clearText}>Clear text</button>
        </div>
    )
}
