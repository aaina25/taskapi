import React, { useState } from 'react'
import HomeComponent from "./home";
import ContactusComponent from './contactus';
import AboutusComponent from './aboutus';
import ProjectComponent from './project';
import { Routes, Route } from 'react-router-dom';
function MainComponent() {
// const [count, setCount] = useState(0);
const [uname, setUname] = useState('');
const [upass, setpass] = useState('');

const handleSubmit = () => { //

}
  return (
    <div className="main">

<Routes>
  <Route path="/" element={<HomeComponent/>}></Route>
  <Route path="/home" element={<HomeComponent/>}></Route>
  <Route path="/contactus" element={<ContactusComponent/>}></Route>
  <Route path="/aboutus" element={<AboutusComponent/>}></Route>
  <Route path="/project" element={<ProjectComponent/>}></Route>
</Routes>

   
      </div>
        )
        
}

export default MainComponent