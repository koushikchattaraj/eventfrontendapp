import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./component/Base/Landing/Landing.js";
import { useSelector } from "react-redux";
import { Main } from "./component/Base/Main/Main";
import { useEffect } from "react";

function App() {
  const landingPageStatus = useSelector((state) => state.ladndingPageStatus);

  return (
    <div className="App">{landingPageStatus ? <Landing /> : <Main />}</div>
  );
}

export default App;
