import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUsPage, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
