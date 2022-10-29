import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="settings" element={<Settings />} />
        <Route path="post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
