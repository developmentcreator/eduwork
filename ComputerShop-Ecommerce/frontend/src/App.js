import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const  App  = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptop" element={<h1>Laptop</h1>} />
          <Route path="/desktop" element={<h1>Desktop</h1>} />
          <Route path="/aksesoris" element={<h1>Aksesoris</h1>} />
          <Route path="/detail/:id" element={<h1>Detail</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
