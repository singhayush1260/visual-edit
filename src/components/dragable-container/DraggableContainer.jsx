import React, { useState } from "react";
import classes from './DraggableContainer.module.scss';

const DraggableContainer = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 300, y: 150 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;
      setPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`${classes.draggable_dialog} ${isDragging ? classes.dragging : ""}`}
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default DraggableContainer;
