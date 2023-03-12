import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./component/Base/Landing/Landing.js";
import { useSelector } from "react-redux";
import { Main } from "./component/Base/Main/Main";
import { useEffect } from "react";
import { Event } from "./component/Base/Event/Event";
import card from "./asset/card.jpg"

function App() {
  const landingPageStatus = useSelector((state) => state.ladndingPageStatus);

  const src={card}

  return (
    // <div className="App">{landingPageStatus ? <Landing /> : <Main />}</div>
    <div>
      <Event src  ={src}/>
    </div>

  );
}

export default App;
