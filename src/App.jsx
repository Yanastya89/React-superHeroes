import { useState } from "react";
import "./style/App.css";
import CardList from "./component/CardList/CardList";

function App() {
  return (
    <>
      <h1> Superheros</h1>
      <div className="card-wrapper">
        <CardList />
      </div>
    </>
  );
}

export default App;
