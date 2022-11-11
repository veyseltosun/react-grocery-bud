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
    console.log("on submit work")
  }
  return(
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert></Alert>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type="text"></input>
          <button type="submit" className='submit-btn'>{isEditing ? "edit" : "submit"}</button>
        </div>
      </form>
      <div className='grocery-container'>
        <List></List>
        <button className='clear-btn'>clear items</button>
      </div>

    </section>
  )
}

export default App