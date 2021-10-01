import React, { useEffect, useState } from "react";
import "./App.css";
import { engineContext } from "./context/engineContext";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import ResultPage from "./pages/ResultPage";
import initialStates from "./store/initialStates";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  const [data, setData] = useState(initialStates);
  const [text, setText] = useState("");
  const [sortedValue, setSortedValue] = useState(initialStates.filter((val) => {
    if (text === "") {
      return null;
    } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
      return val;
    }
  }))
  // console.log(data)
  toast.configure();

  //Add Record
  const AddRecord = (record) => {
    const finalData = [...data, record];
    setData(finalData);
    toast(`${record[0]} is Added...`,{position: toast.POSITION.BOTTOM_RIGHT});
  };

  // The Outputs
  

  
  const output = data.filter((val) => {
    if (text === "") {
      return null;
    } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
      return val;
    }
  });


  // Sorting
  const handleAlphabetic = (output) => {
    output.sort()
    setSortedValue(output)
  };

  const handleDate = (output) => {
    output.sort((a, b) =>
      b[3]
        .split("/")
        .reverse()
        .join()
        .localeCompare(a[3].split("/").reverse().join())
    );
    setSortedValue(output)
  };

  

  return (
    <Router>
      <engineContext.Provider
        value={{
          data,
          AddRecord,
          text,
          output,
          sortedValue,
          setText,
          handleAlphabetic,
          handleDate,
        }}
      >
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
