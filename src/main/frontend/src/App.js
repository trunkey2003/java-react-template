
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CustomRoute from "./pages/CustomRoute";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/custom/my-custom' element={<CustomRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
