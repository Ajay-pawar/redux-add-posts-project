import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/post";

import Postform from "./components/postform";
import { Provider } from "react-redux";
import store from "./store"

// const store = createStore(()=>[], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">Form</header>
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
