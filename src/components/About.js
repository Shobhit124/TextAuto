
// import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: "black",
    //         backgroundColor: "white"
    //     }
    // )
    // const [btnText, setBtnText] = useState("Enable dark mode")
    // let toggleStyle = ()=>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setBtnText("Enable light mode")
    //         document.body.style.backgroundColor="grey"
    //     }
    //     else{
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable dark mode")
    //         document.body.style.backgroundColor="white"
    //     }
    // }
    let myStyle = {
        color: props.mode === "dark"?"white":"black",
        backgroundColor: props.mode === "dark"?"#153f65":"white"
    }
  return (
    <div className='container' style={myStyle}>
        <script>{document.title="TextAuto About"}</script>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Services</strong>
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Ease In Use: Format Text In Different Ways Like...
                <b>
                Uppercase Your Text,
                Lowercase Text,
                Copy Text,
                Clear Text</b>
            </div>
        </div>
        </div>
        <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Contact Us:</strong>
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <b>Gmail:</b>shobhitchadha7@gmail.com
            </div>
        </div>
        </div>
        </div>
        {/* <div className='my-2 container'>
            <button type='button' onClick={toggleStyle} className='btn btn-primary'>{btnText}</button>
        </div> */}
        <center><footer>© Developed by Shobhit</footer></center>
    </div>
    
  )
}
