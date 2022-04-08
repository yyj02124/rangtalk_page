import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Ssamtalk from "./Routes/Ssamtalk";
import Rangtalk from "./Routes/Rangtalk";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginPage from "./Routes/Loginpage";
import theme from "./Colorcss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate replace to="/ssamtalk" />} />
          <Route path="/ssamtalk" element={<Ssamtalk />} />
          <Route path="/rangtalk" element={<Rangtalk />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
