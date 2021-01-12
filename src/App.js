import './App.css';
import React, { useEffect, useState } from "react";
import Kort from "./components/Kort";

function App() {
  var [ kortContent, setKortContent ] = useState([]);

  useEffect(function(){
    fetch("./kort.json")
    .then(function(reponse){
      return reponse.json();
    })
    .then(function(data){
      setKortContent(data);
    });
  },[])
  return (
    <>
      {kortContent.map(kort => <Kort image={kort.image}/>)}
    </>
  );
}

export default App;
