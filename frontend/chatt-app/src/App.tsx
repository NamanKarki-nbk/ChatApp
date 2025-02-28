import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";
function App(){
  return(
    <Router>
      <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/profile" element={<Profile/>}/>
    
      </Routes>

    </Router>
    
  )
};
export default App;