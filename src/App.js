 import React from "react";
 import './App.css';

 import { Routes,Route } from "react-router-dom";

 import HomePage from "./pages/homepage/homepage.component";
  
function App() {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<HomePage />} />  
      </Routes>
    </div>
  );
}

export default App;
