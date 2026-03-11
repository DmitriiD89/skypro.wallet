import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./Pages/MainPage/MainPage";
import { AnaliticsPage } from "./Pages/AnaliticsPage/AnaliticsPage";
import { SignInPage } from "./Pages/SignInPage/SignInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/analitics" element={<AnaliticsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
