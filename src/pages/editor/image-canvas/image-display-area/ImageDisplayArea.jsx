import classes from '../ImageCanvas.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import { previewCrop } from "../../../../utils/previewCrop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";
import PreviewCanvas from "../preview-canvas/PreviewCanvas";
import { useEffect } from "react";

const ImageDisplayArea = () => {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [tempCroppedImage, setTempCroppedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { originalImage, croppedImage } = useSelector(
    (state) => state.imageUploadReducer
  );
  const { isCropping } = useSelector( (state) => state.stateReducer);
  const {
    showPreview,
    rotation: degree,
    isButtonClicked: { cropButton, resizeButton, rotateButton },
  } = useSelector((state) => state.transformationReducer);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: "setCroppedImage", payload: tempCroppedImage });
  //   dispatch({
  //     type: "transform",
  //     payload: { buttonType: "crop", value: false },
  //   });
  // }, [cropButton, resizeButton, rotateButton]);

  const handleCrop = async (newCrop) => {
    setCrop(newCrop);
    dispatch({type:'crop',payload:newCrop})
    const ci = previewCrop(imageRef.current, canvasRef.current, crop);
    setTempCroppedImage(ci);
  };

  const cropReleased = () => {
    dispatch({ type: "addCropHistory", payload: crop });
  };

  const cropImage=()=>{
    dispatch({ type: "setCroppedImage", payload: tempCroppedImage });
    dispatch({ type: "disableCropping"});
  }

  const handleScrollZoom = (e) => {
    const delta = e.deltaY;
    console.log(delta);
    if (delta > 0) {
      setZoomLevel(zoomLevel + 0.1);
    } else {
      const MIN_ZOOM_LEVEL = 0.20000000000000015;
      console.log("zoomLevel", zoomLevel);
      setZoomLevel(
        zoomLevel - 0.1 < MIN_ZOOM_LEVEL ? MIN_ZOOM_LEVEL : zoomLevel - 0.1
      );
    }
  };
  return (
    <>
      {isCropping && <button className={classes.done} onClick={cropImage}>Done</button>}
      {originalImage && isCropping && (
        <ReactCrop
          crop={crop}
          onChange={(newC) => handleCrop(newC)}
          onDragStart={() => dispatch({ type: "setPreview", payload: true })}
          onDragEnd={() => dispatch({ type: "setPreview", payload: false })}
          onComplete={cropReleased}
          style={{ width: "100%", height: "100%" }}
        >
          <div style={{ transform: `scale(${zoomLevel})` }}>
            <img
              src={croppedImage || originalImage}
              ref={imageRef}
              alt="image"
              style={{ transform: `rotate(${degree}deg)` }}
              onWheel={(e) => originalImage && handleScrollZoom(e)}
            />
          </div>
        </ReactCrop>
      )}
      {
       originalImage && !isCropping && <div style={{ width:'100%',height:'100%', transform: `scale(${zoomLevel})` }}>
        <img
          src={croppedImage || originalImage}
          ref={imageRef}
          alt="image"
          style={{ transform: `rotate(${degree}deg)` }}
          onWheel={(e) => originalImage && handleScrollZoom(e)}
        />
      </div>
      }
      {showPreview && <PreviewCanvas pcRef={canvasRef} />}
    </>
  );
  
};
export default ImageDisplayArea;
