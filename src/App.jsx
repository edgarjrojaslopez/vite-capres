import Header from './partials/Header';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './utils/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import AuthLayout from './utils/AuthLayout';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Route>
    </Routes>
  );
}

export default App;
