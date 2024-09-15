import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Clicked");
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showalert("Convert to Uppercase!","success")
    }
    const handleLowClick = ()=>{
        console.log("Clicked");
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showalert("Convert to LowerCase!","success")
    }
    const handleCopy =()=>{
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showalert("Copy in Clipboard!","success")
    }
    const handleExtraSpace =()=>{
      let newText=text.split(/[ ]+/);
      settext(newText.join(" "));
      props.showalert("Extra space removed!","success")
    }
    const handleClear =()=>{
      settext("");
      props.showalert("Clear all the text!","success")
    }

    const handleOnChange =(event)=>{
        console.log("onchange");
        settext(event.target.value);
    }
   
    
    const [text, settext] = useState('');
  return (
    <>
  <div className="container">
  <div className="mb-3">
  <h1 className='my-3' style={{color : props.mode === 'dark'?'white':'#11193b' }}>Example textarea</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#30367c':'white', color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remome Extra Space</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear all</button>
  
</div>

  <div className="container my-3" style={{color : props.mode === 'dark'?'white':'#11193b' }}>
    <h1>Your wordcounter</h1>
    {/* <p> {text .split(" ").length} words and {text.length} letters</p> */}

    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} letters</p>
    
    <h2>time to read this</h2>
    <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} time</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing in preview"}</p>
  </div>

</>
  )
}
