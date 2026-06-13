import "./App.css";
import CustomCursor from "./components/CustomCursor";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
