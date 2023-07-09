import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const page = (
  <div>
    <nav className="navbar bg-dark navbar-expand-lg me-auto" data-bs-theme='dark'>
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href='#'>HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#'>ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#'>PLACE ORDER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#'>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <form className='App App-header'>
      <h3>Log in</h3>
      <div>
        <label for='username'>Username</label>
        <input id='username' type='text'></input>
      </div>
      <div>
        <label for='password'>Password</label>
        <input id='password' type='password'></input>
      </div>
    </form>
  </div>

)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  page
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
