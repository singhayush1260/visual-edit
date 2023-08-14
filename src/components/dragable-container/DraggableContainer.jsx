import classes from './DraggableContainer.module.scss';
import { useState, useEffect } from "react";
import { RiDraggable } from 'react-icons/ri';
import {MdClose} from 'react-icons/md';
import { useSelector, useDispatch } from "react-redux";

const DraggableContainer = ({ children, x, y }) => {

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 300, y: 110 });
  const [offset, setOffset] = useState({ x: 0, y: 0 }); 

  const { showDraggableDialogBox } = useSelector((state) => state.stateReducer);
  const dispatch=useDispatch();

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => {
        const x = e.clientX - offset.x;
        const y = e.clientY - offset.y;
        setPosition({ x, y });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
   <>
   {
     <div
     className={`${classes.draggable_dialog} ${isDragging ? classes.dragging : ""}`}
     style={{ top: position.y, left: position.x }}
   >
     <div className={classes.top}>
     <RiDraggable title='Drag' onMouseDown={handleMouseDown} />
     <MdClose onClick={()=>dispatch({ type: "toggleDraggableDialogBoxVisibility"})}/>
     </div>

     {children}
   </div>
   }
   </>
  );
};

export default DraggableContainer;
