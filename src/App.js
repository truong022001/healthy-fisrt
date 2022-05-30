import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home";
import SigninForm from "./components/signinForm";
import RegistrationForm from "./components/registrationForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className="container"> */}
          <nav className="navbar navbar-expand-xl navbar-dark bg-secondary nav-fill w-100 nav-tabs">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item nodisplay">
                  <Link to={"/home"} className="nav-link">
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="header1">Welcome to Healthy-first System</h1>
          <Routes>
            <Route path="/" element={<SigninForm />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
