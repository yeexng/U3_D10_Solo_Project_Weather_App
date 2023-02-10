import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";
import DetailPage from "./Components/DetailPage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<MainPage city="rome" />} path="/" />
          <Route element={<DetailPage />} path="/:detail" />
          <Route element={<ErrorPage />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
