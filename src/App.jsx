import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./MyWork/Dashboard";
import Services from "./Services/Services";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mywork" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
