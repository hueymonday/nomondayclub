import "./App.css";
import CustomCursor from "./components/CustomCursor";
import LandingPage from "./pages/LandingPage";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <LandingPage />
    </>
  );
}

export default App;
