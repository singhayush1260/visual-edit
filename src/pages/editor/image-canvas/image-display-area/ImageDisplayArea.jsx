import React, { useState, useEffect, useRef } from 'react';
import classes from '../ImageCanvas.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Resizable } from 're-resizable';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PreviewCanvas from '../preview-canvas/PreviewCanvas';
import { previewCrop } from '../../../../utils/previewCrop';
import SVG_Filters from '../../../../components/editing-kit/filters/SVG_Filters';


const ImageDisplayArea = () => {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [adjustemnt, setAdjustment] = useState("");
  const [tempCroppedImage, setTempCroppedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const { originalImage, croppedImage } = useSelector((state) => state.imageUploadReducer);
  const { isZooming, isCropping, isResizing } = useSelector((state) => state.stateReducer);
  const { showPreview, rotation: degree } = useSelector((state) => state.transformationReducer);
  const { brightness, contrast, hue, saturation } = useSelector((state) => state.imageAdjustmentsReducer);
  const { noFilter,customFilter, appliedFilter } = useSelector((state) => state.filtersReducer);

  //console.log(appliedFilter);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const handleCrop = async (newCrop) => {
    setCrop(newCrop);
    dispatch({ type: 'crop', payload: newCrop });
    const ci = previewCrop(imageRef.current, canvasRef.current, newCrop); // Use the new crop data
    setTempCroppedImage(ci);
  };

  const cropReleased = () => {
    dispatch({ type: 'addCropHistory', payload: crop });
  };

  const cropImage = () => {
    dispatch({ type: 'setCroppedImage', payload: tempCroppedImage });
    dispatch({ type: 'disableCropping' });
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

  useEffect(() => {
    const a = `brightness(${brightness}%)`;
    setAdjustment(a);
  }, [brightness])

  //`brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hue}deg) saturate(${saturation}%)`

  return (
    <>
      {isCropping && <button className={classes.done} onClick={cropImage}>Done</button>}
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
              style={{ transform: `rotate(${degree}deg)` }}
            />
          </ReactCrop>
        )}
        {originalImage && !isCropping && isResizing && (
          <div style={{ width: '100%', height: '100%' }}>
            <Resizable
              defaultSize={{ width: '100%', height: '100%' }}
              onResizeStop={(e, direction, ref, d) => console.log(d)}
            >
              <img
                ref={imageRef}
                src={croppedImage || originalImage}
                alt="image"
                style={{ transform: `rotate(${degree}deg)` }}
              />
            </Resizable>
          </div>
        )}
        {originalImage && !isCropping && !isResizing && (
          <div style={{ width: '100%', height: '100%' }}>
            {/* <img
              ref={imageRef}
              src={croppedImage || originalImage}
              alt="image"
              style={{
                transform: `rotate(${degree}deg)`,
                filter: adjustemnt,
              }}
            /> */}
       
            {console.log('custom filterx',customFilter)}
             {/* <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <SharpenFilter />
        <GammaFilter />
        <SepiaFilter/>
        <GrayscaleFilter/>
        <InvertFilter/>
        <NegativeFilter/>
        <filter id="custom_filter">
         <feColorMatrix
          type="matrix"
         values="1  1  1  1  1  1  2  1  1  1  1  1  1  1  1  1  1  1  1  1"/>
</filter>
      </svg> */}
      <SVG_Filters/>
      <img src={croppedImage || originalImage} alt="" style={{ filter: appliedFilter ? `url(#${appliedFilter})` : 'none' }} />
          </div>
        )}

      </div>
      {showPreview && <PreviewCanvas pcRef={canvasRef} />}
    </>
  );
};

export default ImageDisplayArea;
