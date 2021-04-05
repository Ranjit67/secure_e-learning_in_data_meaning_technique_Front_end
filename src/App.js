import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Start from "./Starting/Start";
import Signinstate from "./component/Signin/Signinstate/Signinstate";
import Dashboard from "./component/Dashboard/Dashboard";
import Classes from "./component/Live/Classes";
import ClassDetails from "./component/Live/ClassDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/signin">
          <Signinstate />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/classes">
          <Classes />
        </Route>
        <Route exact path="/classesDetails/:id/:id2">
          <ClassDetails />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
