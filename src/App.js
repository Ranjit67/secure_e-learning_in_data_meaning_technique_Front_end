import {BrowserRouter,Route} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Start from "./Starting/Start";
import Signinstate from "./component/Signin/Signinstate/Signinstate";
import Dashboard from "./component/Dashboard/Dashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
   <Navbar />
   <Route exact path="/">
<Start />
   </Route>
   <Route path="/signin">
<Signinstate />
   </Route>
   <Route path="/dashboard">
<Dashboard />
   </Route>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
