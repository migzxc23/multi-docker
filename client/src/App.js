import React from 'react'; // Remove the unused 'Component' import
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/otherpage">Other Page</NavLink>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
