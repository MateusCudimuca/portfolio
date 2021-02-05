import React from "react";
import "./style/GlobalStyle.css";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from"./Components/Home";
import Contact from"./Components/Contact";
import Works from "./Components/Works";
function App() {
  return (
 <BrowserRouter>
 <Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/Contact" component={Contact}/>
   <Route path="/Works" component={Works}/>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
