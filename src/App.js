import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to predraft
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <Router>
        <nav>
          <ul>
            <li>
              <Link  className="App-link" to="/">Home</Link>
            </li>
            <li>
              <Link  className="App-link" to="/stack">Stack</Link>
            </li>
            <li>
              <Link  className="App-link" to="/cluster">Cluster</Link>
            </li>
            <li>
              <Link  className="App-link" to="/box">Box</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/stack">
            <Stack />
          </Route>
          <Route path="/cluster">
            <Cluster />
          </Route>
          <Route path="/box">
            <Box />
          </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Stack() {
  return <h2>Stack</h2>;
}

function Cluster() {
  return <h2>Cluster</h2>;
}

function Box() {
  return <h2>Box</h2>;
}

export default App;
