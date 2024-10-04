import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import JasperEstate from "./components/JasperEstate";

// Import other components as you create them
// import EstatesPage from './components/EstatesPage';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
// import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as you create the components */}
          <Route path="/estates" element={<JasperEstate />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/signup" element={<SignUpPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
