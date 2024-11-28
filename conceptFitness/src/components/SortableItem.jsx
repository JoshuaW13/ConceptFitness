import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import '../App.css';

export const SortableItem = ({ id, index, draggedItem }) => {
  const { setNodeRef, attributes, listeners, isDragging, over } = useSortable({
    id: id,
  });

  // Check if this item is being dragged
  const isOver = over && over.id === id;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`sortable-item ${isDragging ? 'dragging' : ''} ${isOver ? 'hovered' : ''}`}
      style={{
        transform: isDragging ? `scale(1.05)` : undefined,
        transition: isDragging ? 'transform 0.2s ease' : 'none',
        zIndex: isDragging ? 999 : 1, // Make sure the dragged item is on top
      }}
    >
      <div className="sortable-item-content">
        {id}. Item {id}
      </div>

      {/* Placeholder effect for where the item is about to drop */}
      {isOver && <div className="sortable-item-placeholder">Drop here</div>}
    </div>
  );
};