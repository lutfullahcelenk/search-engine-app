import React, { useState } from "react";
import "./App.css";
import { engineContext } from "./context/engineContext";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import ResultPage from "./pages/ResultPage";
import initialStates from "./store/initialStates";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => {
  const [data, setData] = useState(initialStates);
  const [text, setText] = useState("");
  // console.log(data)

  //Add Record
  const AddRecord = (record) => {
    const finalData = [...data, record];
    setData(finalData);
  };

   // The Outputs 
   const output = data
   .filter((val) => {
     if (text === "") {
       return null;
     } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
       return val;
     }
   })



  return (
    <Router>
      <engineContext.Provider value={{ data, AddRecord,text,output,setText }}>
        <Switch>
          <Route path="/resultpage" component={ResultPage} />
          <Route path="/addpage" component={AddPage} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </engineContext.Provider>
    </Router>
  );
};

export default App;