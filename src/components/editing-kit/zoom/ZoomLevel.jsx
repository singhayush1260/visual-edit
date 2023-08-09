import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const ZoomLevel = () => {
  
  const[zoomSlide, setZoomSlide]=useState(0);
  const { zoomLevel } = useSelector((state) => state.imageAdjustmentsReducer);
  const dispatch=useDispatch();

  const handleZoom=(e)=>{
    const newZoomLevel = parseFloat(e.target.value);
    console.log(e.target.value)
    if(newZoomLevel === 1){
      dispatch({type:'defaultZoom'})
    }
    else if(newZoomLevel > zoomSlide){
      dispatch({type:'zoomIn'});
      setZoomSlide(newZoomLevel);
    }
    else{
      dispatch({type:'zoomOut'});
      setZoomSlide(newZoomLevel);
    }
  }
  return (
    <div className={classes.edit_container}>
      <small>Zoom</small>
      <div className={classes.edit_controller}>
        <input type="range" defaultValue={1} min={1} step={1} max={50} onChange={(e)=>handleZoom(e)} />
      </div>
    </div>
  );
};
export default ZoomLevel;
