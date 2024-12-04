import '../App.css';
import SessionLogButton from "../components/SessionLogButton";  
import ExerciseLogButton from "../components/ExerciseLogButton";  
import NavBar from '../components/NavBar';
import ProfileButton from './ProfileButton';
import HomeButton from './HomeButton';

function LogNavbar({ typeSelected }) {
  const logsNavButtons = [
    () => ({ component: SessionLogButton, props: { typeSelected: typeSelected } }),
    () => ({ component: ExerciseLogButton, props: { typeSelected: typeSelected } }),
  ];

  return (
    <NavBar 
      FirstButton={HomeButton} 
      SecondButton={ProfileButton} 
      OtherButtons={logsNavButtons}
    />
  );
}

export default LogNavbar;
