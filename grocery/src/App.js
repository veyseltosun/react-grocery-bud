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
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!name){
      // display alert
      // setAlert({show:true, msg:"please enter a grocery need to buy!", type:"danger"})
      showAlert(true, "danger", "please enter value")
    }
    else if(name && isEditing){
      // deal with editing
    }
    else{
      // show alert
      const newItem = {id: new Date().getTime().toString(), title:name }
      setList([...list, newItem]);
      setName("");
    
  }
}

const showAlert = (show= false, type="", msg="")=>{
  setAlert({show,type,msg})
}
  return(
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type="text" className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <button type="submit" className='submit-btn'>{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      {list.length > 0 &&(

      <div className='grocery-container'>
        <List items={list}/>
        <button className='clear-btn'>clear items</button>
      </div>
      )}

    </section>
  )
}
export default App;