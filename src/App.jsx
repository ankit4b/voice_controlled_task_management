import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import About from "./pages/About";
import { TodoProvider } from "./contexts/TodoContext";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <div className="h-screen">
        <TodoProvider>
          <AuthProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </AuthProvider>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
