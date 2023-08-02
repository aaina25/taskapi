import React from "react";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import MainComponent from "./main";
import './App.css';
import data from "./data.js";

function App() {
  return (<div>
      <HeaderComponent title={data.title} navitems={data.navitems}/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  )
}

export default App;