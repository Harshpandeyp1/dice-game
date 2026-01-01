import StartGame from "./component/StartGame";
import { useState } from "react";
import Gameplay from "./component/Gameplay";

function App() {

  const[isGameStarted,setIsGameStarted]=useState(false);

  const toggle=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {isGameStarted ?  <Gameplay /> :<StartGame
    
    toggle={toggle}/>}
   
    </>
  );
}

export default App;
