import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import About from "./pages/About";
import { TodoProvider } from "./contexts/TodoContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-screen">
        <TodoProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
