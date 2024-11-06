import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AccountPage from "./pages/akun";
import ArtikelPage from "./pages/artikelmore";

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/akun" element={<AccountPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artikel" element={<ArtikelPage/>} />
    </Routes>
  );
};

export default App;
