import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import Development from "./pages/Development";
import Deployment from "./pages/Deployment";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* Service Pages */}
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/development" element={<Development />} />
        <Route path="/deployment" element={<Deployment />} />
      </Routes>
    </Router>
  );
}

export default App;
