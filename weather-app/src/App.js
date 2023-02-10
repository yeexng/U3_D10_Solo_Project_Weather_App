import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div>
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
