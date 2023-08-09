import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import Image from "../../../../components/lazy-loading-images/Image";
import ReactCrop from "react-image-crop";
import getCroppedImage from "../../../../utils/getCroppedImage";
import {previewCrop} from '../../../../utils/previewCrop';
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";

const ImageDisplayArea = () => {
  const[crop, setCrop]=useState({aspect:16/9});
  const[croppedImage, setCroppedImage]=useState(null);
  const { cropData } = useSelector((state) => state.transformationReducer);
  const { selectedImage } = useSelector((state) => state.imageUploadReducer);

  const canvasRef=useRef(null);
  const imageRef=useRef(null);
  const dispatch = useDispatch();

  const handleCrop = async () => {
   const ci=previewCrop(imageRef.current,canvasRef.current,crop);
   setCroppedImage(ci);
   console.log('cropped Image',ci);  
   try {
    const response = await axios.post('http://localhost:4000/api/edit/crop', crop);
    console.log('Server response:', response.data);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
  };

  return (
    <>
      {selectedImage && (
        <ReactCrop
          crop={crop}
          onChange={(newC) => setCrop(newC)}
          onComplete={handleCrop}>
            {/* <Image src={selectedImage} /> */}
            <img src={selectedImage} ref={imageRef} alt="" />
        </ReactCrop>
      )}
      { croppedImage && <img src={croppedImage} alt="cropped"/>}
      <canvas ref={canvasRef} style={{width:'200px',height:'200px'}}/>
    </>
  );
};
export default ImageDisplayArea;

