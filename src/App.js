
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/Home/register/Register";
import SinglePost from "./components/singlePost/SinglePost";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  
  return (
    <Router>
      <TopBar/>
      
        <div className="myLinks">
  
        </div>
        <Routes>
        <Route  path="/" element={<Home/>}/>
          <Route  path="/Login" element={<Login/>}/>
          <Route  path="/Register" element={<Register/>}/>
          <Route  path="/Write" element={<Write/>}/>
          <Route  path="/Settings" element={<Settings/>}/>
          <Route path="/SinglePost" element={<SinglePost/>}/>
        </Routes>
      </Router>


  );
}



export default App;
