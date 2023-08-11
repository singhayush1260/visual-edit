
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import Image from "../../../../components/lazy-loading-images/Image";
import ReactCrop from "react-image-crop";
import { previewCrop } from '../../../../utils/previewCrop';
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";
import PreviewCanvas from '../preview-canvas/PreviewCanvas';
import { useEffect } from "react";

const ImageDisplayArea = () => {

  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [tempCroppedImage, setTempCroppedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { selectedImage, croppedImage } = useSelector((state) => state.imageUploadReducer);
  const { showPreview, rotation: degree, isButtonClicked: { cropButton, resizeButton, rotateButton } } = useSelector((state) => state.transformationReducer)


  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: 'setCroppedImage', payload: tempCroppedImage });
    dispatch({ type: 'transform', payload: { buttonType: 'crop', value: false } })
  }, [cropButton, resizeButton, rotateButton])

  const handleCrop = async (newCrop) => {
    setCrop(newCrop);
    const ci = previewCrop(imageRef.current, canvasRef.current, crop);
    setTempCroppedImage(ci);
    //  try {
    //   const response = await axios.post('http://localhost:4000/api/edit/crop', crop);
    //   console.log('Server response:', response.data);
    // } catch (error) {
    //   console.error('Error uploading image:', error);
    // }
  };

  const cropReleased = () => {
    dispatch({ type: 'addCropHistory', payload: crop });
  }

  const handleScrollZoom = (e) => {
    const delta = e.deltaY;
    console.log(delta);
    if (delta > 0) {
      setZoomLevel(zoomLevel + 0.1);
    } else {
      const MIN_ZOOM_LEVEL = 0.20000000000000015;
      console.log('zoomLevel', zoomLevel);
      setZoomLevel(zoomLevel - 0.1 < MIN_ZOOM_LEVEL ? MIN_ZOOM_LEVEL : zoomLevel - 0.1);
    }
  };
  return (
    <>
      {selectedImage && (
        <ReactCrop
          crop={crop}
          onChange={(newC) => handleCrop(newC)}
          onDragStart={() => dispatch({ type: 'setPreview', payload: true })}
          onDragEnd={() => dispatch({ type: 'setPreview', payload: false })}
          onComplete={cropReleased}
          style={{ width: '100%', height: '100%' }}
          disabled={false} >
          {/* <Image src={selectedImage} /> */}
          <div style={{ transform: `scale(${zoomLevel})` }}>
            <img src={croppedImage || selectedImage} ref={imageRef} alt="image" style={{ transform: `rotate(${degree}deg)` }} onWheel={(e) => selectedImage && handleScrollZoom(e)} />
          </div>
        </ReactCrop>
      ) }
      {showPreview && <PreviewCanvas pcRef={canvasRef} />}
    </>
  );
};
export default ImageDisplayArea;

