import React, { createContext, useState, useContext } from 'react';

// Create the context with an empty array for exercises
const ExerciseCatalogueContext = createContext();

// Create a provider component
export const ExerciseCatalogueProvider = ({ children }) => {
  // Use React's useState hook to manage the list of exercises
  const [exercises, setExercises] = useState([
    { 
      id: 1, 
      name: "Pull Up", 
      equipment: "Pull Up Bar", 
      targetMuscle: "Back, Arms", 
      description: "Pull-ups are a bodyweight exercise that primarily targets the back and arm muscles, especially the latissimus dorsi. It involves pulling the body up while gripping a horizontal bar, helping to build upper body strength and endurance.",
    },
    { 
      id: 2, 
      name: "Pushup", 
      equipment: "NA", 
      targetMuscle: "Chest, Triceps", 
      description: "Push-ups are a classic bodyweight exercise that works the chest, triceps, and shoulders. By lowering and raising the body with the arms while in a plank position, push-ups help to improve upper body strength and core stability.",
    },
    { 
      id: 3, 
      name: "Muscle Up", 
      equipment: "Pull Up Bar", 
      targetMuscle: "Back, Chest, Tricep", 
      description: "The muscle-up is an advanced bodyweight exercise that combines a pull-up and a dip. It targets the back, chest, and triceps while requiring explosive strength to transition from a pull-up into a dip on a bar.",
    },
    { 
      id: 4, 
      name: "Squat", 
      equipment: "Squat Rack", 
      targetMuscle: "Hamstring, Glutes", 
      description: "The squat is a fundamental lower body exercise that targets the hamstrings, glutes, and quads. By bending the knees and lowering the hips towards the ground, squats improve leg strength, mobility, and overall lower body power.",
    },
    { 
      id: 5, 
      name: "Bench Press", 
      equipment: "Bench and Barbell", 
      targetMuscle: "Chest, Arms", 
      description: "The bench press is a classic upper body exercise targeting the chest, shoulders, and triceps. By lowering a barbell to the chest and pressing it upwards, this exercise helps to build upper body strength and muscle mass.",
    },
    { 
      id: 6, 
      name: "Dips", 
      equipment: "Dip Bar", 
      targetMuscle: "Chest, Triceps", 
      description: "Dips are a bodyweight exercise performed on parallel bars, targeting the chest and triceps. The movement involves lowering the body and then pushing back up, helping to improve upper body strength, particularly in the arms and chest.",
    },
    { 
      id: 7, 
      name: "Cable Row", 
      equipment: "Cable Row Machine", 
      targetMuscle: "Back", 
      description: "The cable row is a strength training exercise that primarily targets the muscles of the back, including the latissimus dorsi, rhomboids, and traps. It involves pulling a cable attachment towards the torso, promoting good posture and back strength.",
    },
    { 
      id: 8, 
      name: "Bulgarian Split Squat", 
      equipment: "Bench", 
      targetMuscle: "Hamstring, Glutes", 
      description: "The Bulgarian split squat is a unilateral leg exercise that targets the hamstrings, glutes, and quads. By elevating one leg on a bench and lowering the body into a lunge, this exercise improves balance, strength, and muscle development in the legs.",
    },
    { 
      id: 9, 
      name: "Nordic Hamstring Curl", 
      equipment: "Foot Anchor", 
      targetMuscle: "Hamstrings", 
      description: "The Nordic hamstring curl is an advanced exercise designed to target the hamstrings. By kneeling and slowly lowering the body forward using only the hamstrings for control, this movement helps to increase hamstring strength and prevent injuries.",
    },
    { 
      id: 10, 
      name: "Military press", 
      equipment: "Dumbbells", 
      targetMuscle: "Shoulders, Arms", 
      description: "The military press, also known as the overhead press, is a compound exercise that targets the shoulders and arms. By pressing dumbbells overhead while maintaining a tight core, this exercise strengthens the shoulders and improves upper body stability.",
    },
    { 
      id: 11, 
      name: "Bicep Curls", 
      equipment: "Dumbbells", 
      targetMuscle: "Bicep", 
      description: "Bicep curls are a basic arm exercise that isolate the biceps. By curling dumbbells towards the shoulders while keeping the elbows stationary, this exercise builds bicep strength and definition.",
    },
    { 
      id: 12, 
      name: "Hammer Curls", 
      equipment: "Dumbbells", 
      targetMuscle: "Bicep, Wrists", 
      description: "Hammer curls are a variation of the traditional bicep curl that targets both the biceps and forearms. By holding the dumbbells with a neutral grip and curling them towards the shoulders, this exercise improves arm strength and grip endurance.",
    },
    { 
      id: 13, 
      name: "Deadlift", 
      equipment: "Barbell", 
      targetMuscle: "Back, Hamstrings, Glutes", 
      description: "The deadlift is a full-body exercise that focuses on the posterior chain, including the back, hamstrings, and glutes. By lifting a barbell from the ground while keeping the back straight, deadlifts help to build strength and power in the lower body and back.",
      
    },
    { 
      id: 14, 
      name: "Front Squat", 
      equipment: "Barbell", 
      targetMuscle: "Quads, Glutes", 
      description: "The front squat is a variation of the squat that places more emphasis on the quads. By holding a barbell across the front of the shoulders and squatting down, this exercise strengthens the legs and helps improve posture.",
    
    },
    { 
      id: 15, 
      name: "Overhead Squat", 
      equipment: "Barbell", 
      targetMuscle: "Core, Shoulders, Quads", 
      description: "The overhead squat is an advanced compound exercise that challenges the entire body, with a focus on the shoulders, core, and quads. By holding a barbell overhead while squatting, it improves balance, mobility, and overall strength.",
    
    }
    // Add descriptions for remaining exercises similarly
  ]);

  // Function to add an exercise
  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  // Function to remove an exercise
  const removeExercise = (id) => {
    setExercises((prevExercises) => prevExercises.filter(ex => ex.id !== id));
  };

  return (
    <ExerciseCatalogueContext.Provider value={{ exercises, addExercise, removeExercise }}>
      {children}
    </ExerciseCatalogueContext.Provider>
  );
};

// Custom hook to access the context easily
export const useExerciseCatalogueContext = () => {
  return useContext(ExerciseCatalogueContext);
};
