import classes from "../ImageCanvas.module.scss";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const PreviewCanvas = ({pcRef}) => {
//   const previewCanvasRef = useRef(null);
//   const{ selectedImage }=useSelector((state)=>state.imageUploadReducer)
//   const dispatch=useDispatch();
//   useEffect(() => {
//     dispatch({ type: "setPreviewCanvasRef", payload: previewCanvasRef.current });
//   }, []);

  return <canvas className={classes.preview_canvas} ref={ pcRef } />;
};
export default PreviewCanvas;
