import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
// import ColorPalette from './components/ColorPalette';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
const [mode, setmode]=useState('light');
const [alert, setalert] = useState(null);
// const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33FFF5', '#A633FF', '#F5FF33'];

const showalert =(message, type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
}

const removeBodyClass =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-light')


}

const togglemode =(cls)=>{
  removeBodyClass();
  console.log(cls)
  document.body.classList.add('bg-'+cls)
  if( mode ==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#11193b'
      showalert("Enabled the dark mode!", "success");
      document.title = 'TextUtil - Dark mode';
    //   setInterval(() => {

    //   document.title = 'TextUtil is Amazing mode';

    //   }, 2000);
    //   setInterval(() => {

    //     document.title = 'install TextUtil Now';
  
    //     }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Enabled the light mode!", "success");
      document.title= 'TextUtil - Light mode';  
    }
}

  return (
    <>
    <BrowserRouter>
    <Navbar title="Navbar" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about"  element={<About mode={mode}/>} />

          <Route path="/" element={<TextForm mode={mode} showalert={showalert} />}/>  

    </Routes>
    </div>
    {/* <ColorPalette colors={colors}/> */}
    </BrowserRouter>
</>
  );
}


export default App;
