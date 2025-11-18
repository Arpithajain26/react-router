import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/contact.jsx";

// adjust the path if needed

function App() {
  return (
    <BrowserRouter>
      <h1 className="bg-green-300">React Router DOM</h1>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
