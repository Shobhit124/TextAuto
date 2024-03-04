import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils Light"
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#153f65";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils Dark"
    }
  }
  return (
    <>
    
    <Navbar title="TextAuto" aboutus="About Us" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3" >
    {/* <TextArea heading="Text Area" mode={mode} alert={alert} showAlert={showAlert}/> */}
    <Router>
      <Routes>
            <Route exact path="/" element={<TextArea heading="Text Area" mode={mode} alert={alert} showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>} />
              
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
