import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import TicketPg from "./pages/Ticket/TicketPg";
import "react-toastify/dist/ReactToastify.css";

import Venue from "./pages/Venue/Venue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receipt/:id" element={<TicketPg />} />
        <Route path="/venues" element={<List />} />
        <Route path="/venues/:id" element={<Venue />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
