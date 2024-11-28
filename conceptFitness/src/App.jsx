import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx';
import Session from './pages/Session.jsx';
import Catalogue from './pages/ExerciseList.jsx';
import Programs from './pages/Programs.jsx';
import SessionLogs from './pages/SessionLogs.jsx';
import ExerciseLogs from './pages/ExerciseLogs.jsx';
import SignUp from './pages/SignUp.jsx';
import { ExerciseCatalogueProvider } from './contexts/ExerciseCatalogueContext.jsx';
import {ProgramProvider} from "./contexts/ProgramsContext";
import Settings from './pages/Settings.jsx';
import { CalendarProvider } from './contexts/CalendarContext.jsx';

function App() {
  return (
    <Router>
      <ProgramProvider>
        <ExerciseCatalogueProvider>
          <CalendarProvider>
            <div className="sm:aspect-[9/18] sm:h-[95vh] w-full sm:w-auto sm:mx-auto h-full bg-gray-50 rounded-lg shadow-lg flex items-center justify-center">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/session" element={<Session />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/sessionLogs" element={<SessionLogs />} />
                <Route path="/exerciseLogs" element={<ExerciseLogs />} />
                <Route path="/signUp" element={<SignUp />} />
              </Routes>
            </div>
          </CalendarProvider>
        </ExerciseCatalogueProvider>
      </ProgramProvider>
    </Router>
  );
}

export default App;
