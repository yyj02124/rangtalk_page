import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ssamtalk from "./Routes/ssamtalk";
import Rangtalk from "./Routes/rangtalk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ssamtalk />}></Route>
        <Route path="/rangtalk" element={<Rangtalk />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
