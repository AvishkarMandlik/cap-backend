import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import CapDashboard from './pages/CapDashboard';
import HallTicket from './components/HallTicket/HallTicket';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
      <Route path="/teacherdashboard" element={<TeacherDashboard />} />
      <Route path="/capdashboard" element={<CapDashboard />} />
      <Route path="/hallticket" element={<HallTicket />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
