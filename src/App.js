import "./App.css";
import Main from "./Components/Main";
import {useState} from 'react'

function App() {
  const toDos=[
 
  ]
  const [newData, setNewData] = useState(toDos)

  const onSaveData = (data)=>{
    console.log(data)
    setNewData((prev)=>[...prev,data ])
  }
  return (
    <div className="h-screen bg-sky-200">
      <Main data={newData} saveData={onSaveData} />
    </div>
  );
}

export default App;
