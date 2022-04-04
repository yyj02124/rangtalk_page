import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Ssamtalk from "./Routes/Ssamtalk";
import Rangtalk from "./Routes/Rangtalk";
import { CssBaseline } from "@mui/material";
import LoginPage from "./Routes/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate replace to="/ssamtalk" />} />
        <Route path="/ssamtalk" element={<Ssamtalk />}></Route>
        <Route path="/rangtalk" element={<Rangtalk />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
