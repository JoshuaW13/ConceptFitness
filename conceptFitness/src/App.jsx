import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx';
import Session from './pages/Session.jsx';
import Catalogue from './pages/Catalogue.jsx';
import Programs from './pages/Programs.jsx';
import Logs from './pages/Logs.jsx';

function App() {
  return (
    <Router>
      <div className="w-[25vw] h-[90vh] bg-gray-50 rounded-lg shadow-lg flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/session" element={<Session />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
