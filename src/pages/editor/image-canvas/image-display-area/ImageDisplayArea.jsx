import React, { useState, useEffect, useRef } from 'react';
import classes from '../ImageCanvas.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Resizable } from 're-resizable';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PreviewCanvas from '../preview-canvas/PreviewCanvas';
//import { cropAndScale } from '../../../../utils/cropAndScale';
import useTransform from '../../../../hooks/useTransform';
import useImageEditingAPI from '../../../../hooks/useImageEditingAPI';
import SVG_Filters from '../../../../components/editing-kit/filters/SVG_Filters';



const ImageDisplayArea = () => {
  
  const [resizeDelta, setResizeDelta]=useState({});
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [adjustemnt, setAdjustment] = useState("");
  const [croppedImagePreview, setCroppedImagePreview] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [resizedImageURL, setResizedImageURL] = useState(null);

  const { imageName, originalImage, croppedImage } = useSelector((state) => state.imageUploadReducer);
  const { isZooming, isCropping, isResizing } = useSelector((state) => state.stateReducer);
  const { showPreview, rotation: degree } = useSelector((state) => state.transformationReducer);
  const { brightness, contrast, hue, saturation } = useSelector((state) => state.imageAdjustmentsReducer);
  const { noFilter,customFilter, appliedFilter } = useSelector((state) => state.filtersReducer);
  const { originalDimension } = useSelector((state)=>state.imageReducer);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const { cropAndScale, resizeImage } = useTransform();

  const { editedImage, isLoading, error, editImage } = useImageEditingAPI();

  const handleCrop = async (newCrop) => {
    setCrop(newCrop);
    dispatch({ type: 'crop', payload: newCrop });
    const preview = cropAndScale(imageRef.current, canvasRef.current, newCrop); 
    setCroppedImagePreview(preview);
  };

  const cropReleased = () => {
    dispatch({ type: 'addCropHistory', payload: crop });
  };

  const handleScrollZoom = (e) => {
    const delta = e.deltaY;
    if (delta > 0) {
      setZoomLevel(zoomLevel + 0.1);
    } else {
      const MIN_ZOOM_LEVEL = 0.20000000000000015;
      setZoomLevel(
        zoomLevel - 0.1 < MIN_ZOOM_LEVEL ? MIN_ZOOM_LEVEL : zoomLevel - 0.1
      );
    }
  };

  const handleResize=(delta)=>{
   console.log(delta)
   setResizeDelta(delta);
  }


 const renderImage=()=>{
  if(isZooming){
    const renderedImage = cropAndScale(imageRef.current, canvasRef.current, crop, zoomLevel); 
    setTempCroppedImage(renderedImage);
    setZoomLevel(1);
    dispatch({ type: 'disableZoom' });
  }
  else if(isCropping){
    dispatch({ type: 'setCroppedImage', payload: croppedImagePreview });
    dispatch({ type: 'disableCropping' });
  }
  else if(isResizing){
    
    const RESIZE_ENDPOINT='http://localhost:4000/api/edit/transform';


    const newWidth = originalDimension.width - ( resizeDelta.width * -1 );
    const newHeight = originalDimension.height - ( resizeDelta.height * -1 );

    const editInfo={resize:{newWidth, newHeight}};


    console.log('od',originalDimension);
    console.log('newd',editInfo);

    editImage(imageName,editInfo,RESIZE_ENDPOINT).then((a)=>{
      console.log('aaaaaa',a);
      dispatch({ type: 'setCroppedImage', payload: a });
      dispatch({ type: 'disableResizing' });
     window.open('/resized-image', '_blank'); // Open a new tab
    })
  }
  else{

  }
 }
  

  useEffect(() => {
    const a = `brightness(${brightness}%)`;
    setAdjustment(a);
  }, [brightness])

  //`brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) saturate(${saturation}%)`

  return (
    <>
      { (isCropping || isZooming || isResizing) && <button className={classes.done} onClick={renderImage}>Done</button>}
      <div
        className={classes.zoom_area}
        style={{
          transform: `scale(${zoomLevel})`,
          cursor: isZooming ? 'zoom-in' : 'default',
        }}
        onWheel={(e) => originalImage && isZooming && handleScrollZoom(e)}
      >
        {originalImage && isCropping && (
          <ReactCrop
            crop={crop}
            onChange={(newCrop) => handleCrop(newCrop)}
            onDragStart={() => dispatch({ type: 'setPreview', payload: true })}
            onDragEnd={() => dispatch({ type: 'setPreview', payload: false })}
            onComplete={cropReleased}
            style={{ width: '100%', height: '100%' }}
          >
            <img
              src={croppedImage || originalImage}
              ref={imageRef}
              alt="image"
              style={{ width:'100%', height:'100%', transform: `rotate(${degree}deg)` }}
            />
          </ReactCrop>
        )}
        {originalImage && !isCropping && !isZooming && isResizing && (
            <Resizable
              defaultSize={{ width: '100%', height: '100%' }}
              onResizeStop={(e, direction, ref, d) => handleResize(d)}
            >
              <img
                ref={imageRef}
                src={croppedImage || originalImage}
                alt="image"
              />
            </Resizable>
        )}
        {originalImage && !isCropping && !isResizing && (
          <div style={{ width: '100%', height: '100%' }}>
       
      <SVG_Filters/>
      {console.log('resizedImageURL',resizedImageURL)}
      <img src={resizedImageURL || croppedImage || originalImage} alt="" style={{ filter: appliedFilter ? `url(#${appliedFilter})` : 'none' }} />
          </div>
        )}
        
      </div>
      {showPreview && <PreviewCanvas pcRef={canvasRef} />}
   
    </>
  );
};

export default ImageDisplayArea;
