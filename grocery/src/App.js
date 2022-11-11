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
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, msg: "", type: ""});
  return(
    <section className='section-center'>
      
    </section>
  )
}

export default App