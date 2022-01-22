import { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {


  //Runs code based on given condition
  useEffect(() => {
    const token = getTokenFromUrl(); 
    console.log('TOKEN>>> ', token)
  }, []); 

  return (
    // BEM
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
