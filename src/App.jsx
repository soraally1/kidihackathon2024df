import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import AccountPage from "./component/akun";
import ArtikelPage from "./component/artikelmore";

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
