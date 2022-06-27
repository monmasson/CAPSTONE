
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import ExercisesList from "./components/ExerciseList";
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs';
import Home from './components/Home';



function App() {
  return (
    <div>
    
  
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path='/blogs' element={<Blogs/>} />
     
      
     <Route path="/exercise" element={<ExercisesList/>}/>
      
    </Routes>
    </div>
  );
}

export default App;