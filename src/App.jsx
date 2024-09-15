import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import About from "./pages/About";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;
