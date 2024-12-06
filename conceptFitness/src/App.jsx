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
import Popup_Notif from './components/Popup_Notif.jsx';
import { ExerciseCatalogueProvider } from './contexts/ExerciseCatalogueContext.jsx';
import {ProgramProvider} from "./contexts/ProgramsContext";
import { CalendarProvider } from './contexts/CalendarContext.jsx';
import { SessionLogProvider } from './contexts/SessionLogContext.jsx';
import { ExerciseLogProvider } from './contexts/ExerciseLogContext.jsx';
import { NotifProvider} from "./contexts/NotifContext.jsx";
import { GoalProvider } from './contexts/GoalsContext.jsx';

function App() {
  return (
    <Router>
      <ProgramProvider>
        <ExerciseCatalogueProvider>
          <SessionLogProvider>
            <ExerciseLogProvider>
              <CalendarProvider>
                <NotifProvider>
                  <GoalProvider>
                    <div className="sm:aspect-[9/18] sm:h-[95vh] w-full sm:w-auto sm:mx-auto h-full bg-gray-50 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
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
                        <Popup_Notif/>
                      </div>
                  </GoalProvider>
                </NotifProvider>
              </CalendarProvider>
            </ExerciseLogProvider>
          </SessionLogProvider>
        </ExerciseCatalogueProvider>
      </ProgramProvider>
    </Router>
  );
}

export default App;
