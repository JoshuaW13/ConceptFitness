import React, { useState, useCallback } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor, TouchSensor } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';
import '../App.css';
import EditIcon from '../assets/EditIcon.png';
import BookIcon from '../assets/BookIcon.png';
import ExerciseInfoHeaderShort from '../components/ExerciseInfoHeaderShort';
import ExerciseInfoShort from '../components/ExerciseInfoShort';
import { useNavigate } from 'react-router-dom';

function CatalogueDrawerContent({ plannedExercises, setPlannedExercises }) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null); // Track which item is currently hovered over

  const navigatePrograms = () => {
    navigate("/programs");
  };

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setPlannedExercises((prevExercises) => {
        const oldIndex = prevExercises.findIndex((exercise) => exercise.id === active.id);
        const newIndex = prevExercises.findIndex((exercise) => exercise.id === over.id);
        return arrayMove(prevExercises, oldIndex, newIndex);
      });
    }
  }, [setPlannedExercises]);

  const handleDragOver = useCallback(({ over }) => {
    setActiveItem(over ? over.id : null);
  }, []);

  // Using useSensors to add both touch and pointer sensors
  const sensors = useSensors(useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 1000,
      tolerance: 5,
    },
  }));

  return (
    <div className="p-3 h-[85%]">
      <div className="flex flex-row justify-between m-2">
        <button type="text" className="w-[80%] h-8 text-black bg-gray-300 hover:bg-gray-400 pl-2 text-left text-lg">
          Program Name
        </button>
        <button className='w-[11%] bg-gray-300' onClick={navigatePrograms}>
          <img src={BookIcon} alt="" className="p-1" />
        </button>
      </div>
      <div className="flex flex-row justify-between m-2">
        <p>Tags:</p>
        <input type="text" className="w-[85%] text-black bg-gray-300 pl-2 rounded-md" placeholder="Arm, Upper Body, Triceps, etc..." />
      </div>

      {/* DnD context with sensors */}
      <DndContext
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}  // Update active item during drag
        sensors={sensors}  // Using both Pointer and Touch sensors
      >
        <SortableContext items={plannedExercises.map((exercise) => exercise.id)} strategy={verticalListSortingStrategy}>
          <div className='h-[100%] w-[93%] bg-gray-200 flex flex-col rounded-lg gap-2 overflow-y-auto m-3 scrollbar-hidden'>
            {plannedExercises.map((exercise) => (
              <SortableItem
                key={exercise.id}
                exercise={exercise}
                activeItem={activeItem}
                plannedExercises={plannedExercises}
                setPlannedExercises={setPlannedExercises}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

const SortableItem = ({ exercise, activeItem, setPlannedExercises, plannedExercises }) => {
  const { setNodeRef, listeners, attributes, isDragging } = useSortable({
    id: exercise.id,
  });

  const isOver = activeItem === exercise.id; // Check if the item is the one being hovered

  // Add appropriate styling for touch interactions
  const draggingClass = isDragging ? 'dragging' : '';

 

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`p-0.5 ${isDragging ? 'bg-gray-300' : 'bg-gray-200'} ${isOver ? 'border-2 border-blue-500' : ''} ${draggingClass}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
      }}
    >
      <ExerciseInfoHeaderShort
        id={exercise.id}
        exerciseName={exercise.name}
        exerciseEquipment={exercise.equipment}
        plannedExercises={plannedExercises}
        setPlannedExercises={setPlannedExercises}
        onRemove={()=>{
          const id = exercise.id
          setPlannedExercises((prevExercises) =>
            prevExercises.filter(exercise => exercise.id !== id)
          );
        }}
      />
      <ExerciseInfoShort targetMuscle={exercise.targetMuscle} />
    </div>
  );
};

export default CatalogueDrawerContent;
