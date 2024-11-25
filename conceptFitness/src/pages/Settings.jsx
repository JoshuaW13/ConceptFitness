import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';
import { SortableItem } from '../components/SortableItem';
import '../App.css';

function Settings() {
  // Create state for the list of numbers
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [draggedItem, setDraggedItem] = useState(null);

  // Handle the sorting logic
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setDraggedItem(null); // Reset the dragged item after the drop
  };

  const handleDragStart = (event) => {
    setDraggedItem(event.active.id); // Set the currently dragged item
  };

  return (
    <div>
      <h2>Sortable List of Numbers</h2>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="sortable-list">
            {items.map((item, index) => (
              <SortableItem
                key={item}
                id={item}
                index={index}
                draggedItem={draggedItem} // Pass draggedItem state for visual feedback
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Settings;
