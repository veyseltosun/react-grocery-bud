import { useState, useEffect } from 'react';
import List from "./List";
import Alert from "./Alert";


const getLocalStorage = () =>{
  let list = localStorage.getItem("list");
  if (list){
    return list = JSON.parse(localStorage.getItem("list"));

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
      setList(
        list.map((item) => {
          if(item.id === editID){
            return{...item, title:name}
          }
          return item
        })
      )
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true,"success", "ürün adı düzeltildi")

    }
    else{
      showAlert(true, "success", "ürün listeye eklendi")
      const newItem = {id: new Date().getTime().toString(), title:name }
      setList([...list, newItem]);
      setName("");
    
  }
}

const showAlert = (show= false, type="", msg="")=>{
  setAlert({show, type, msg})
}

const clearList = () =>{
  showAlert(true, "danger", "listen boşaldı");
  setList([]);

}
const removeItem = (id)=>{
  showAlert(true, "danger", "ürün listeden kaldırıldı!")
  setList(list.filter((item)=>item.id!==id))
}

const editItem =(id) =>{
  const specificItem = list.find((item)=>item.id===id);
  setIsEditing(true);
  setEditID(id);
  setName(specificItem.title);
  

}

useEffect(()=>{
  localStorage.setItem("list", JSON.stringify(list))

},[list])
  return(
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>veysel'in market listesi</h3>
        <div className='form-control'>
          <input type="text" className='grocery' placeholder='örneğin =  "yumurta." ' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <button type="submit" className='submit-btn'>{isEditing ? "düzelt" : "ekle"}</button>
        </div>
      </form>
      {list.length > 0 &&(

      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
      )}

    </section>
  )
}
export default App;