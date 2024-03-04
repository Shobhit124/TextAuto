import React, {useState} from 'react'
export default function TextArea(props) {
    const [text, setText] = useState("");
    const handleUpper = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Uppercased", "success");
        
    }
    const handleLower = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Lowercased", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const clearText = ()=>{
        let clear = "";
        setText(clear);
        props.showAlert("Text Cleared   ", "success");
    }
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Copied To Clipboard!", "success");
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
        
    }
  return (
    <>
        <div className="container" style={{ color: props.mode === "dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">            
                <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode === "dark"?"#153f65":"white", color: props.mode === "dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpper}>To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLower}>To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copy}>Copy All</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear All</button>
        </div>
        <div className="container my-2" style={{color: props.mode === "dark"?"white":"black"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <pre style={{color: text.length>0?"":"red"}}>
                {text.length>0?text:"Nothing to preview!"}
            </pre>
        </div>
    </>
  )
}
