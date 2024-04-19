// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as PropTypes from "prop-types";
import {HelloWorld} from "./assets/HelloWorld.jsx";
import Welcome from "./assets/Welcome.jsx";

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

function App() {
  const [count, setCount] = useState(0)

    function handleButtonClick() {
        alert(new Date().toLocaleTimeString())
    }

    return (
      <>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
          <HelloWorld />
          <Welcome name="Kate" age={21}/>
          <Welcome name="John" age={17}/>
          <Welcome name="John" age={21}/>
          <Welcome name="John" age={33}/>
          <Welcome name="John" age={44}/>
          <button onClick={handleButtonClick}>Sappilora!</button>
      </>
  )
}

export default App
