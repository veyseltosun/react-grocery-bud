import { useState, useEffect } from 'react';
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () =>{
  let list = localStorage.getItem("list");
  if (list){
    return(list = JSON.parse(localStorage.getItem("list")));

  }else{
    return[];
  }
}








function App() {
  return (
    <div>Grocery Bud App</div>
  )
}

export default App