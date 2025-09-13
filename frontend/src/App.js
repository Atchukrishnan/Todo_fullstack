import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const[enteredvalue,setevalue] = useState("")
  const[fruit_list,setfruit_list] = useState([])
  
  function handleinput(e){
    setevalue(e.target.value)
  }
  useEffect(function(){
    axios.get("http://localhost:5000/fruitlist")
  .then(function(response){
    setfruit_list(response.data)
  }).catch(error => {
    console.error("Error fetching fruit list:", error);
  })
  },[])



  function handleAdd() {
  if (enteredvalue.trim() === "") return;

  axios.post("http://localhost:5000/addfruits", { newfruit: enteredvalue })
    .then(response => {
      // After successful addition, refresh the list by fetching from backend
      return axios.get("http://localhost:5000/fruitlist");
    })
    .then(response => {
      setfruit_list(response.data);
      setevalue("");
    })
    .catch(error => console.error("Error adding fruit:", error));
}

  return (
    <div>
      <input type="text" value={enteredvalue} onChange={handleinput}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
        fruit_list.map(function(item){
          return <li key={item._id}>{item.name}</li>
        })
      }
      </ul>
    </div>
  )
}

export default App;
