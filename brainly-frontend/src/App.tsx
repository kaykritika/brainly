
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
}

export default App
