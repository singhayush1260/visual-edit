import { useState,useEffect,useRef, useCallback } from 'react';
import classes from '../ImageCanvas.module.scss';
import useTransform from '../../../../hooks/useTransform';
import useUtilities from '../../../../hooks/useUtilities';
import ReactCrop from 'react-image-crop';
import { Resizable } from 're-resizable';
import { useSelector, useDispatch } from 'react-redux';

const ImageArea=({image:imageBlob})=>{
   
   const dispatch=useDispatch();
   const[rotatedImage, setRotatedImage]=useState(null);
   const[resizedImage, setResizedImage]=useState(null);
   const[cropData, setCropData]=useState({ aspect: 1 / 1 });
   const[resizeDelta, setResizeDelta]=useState({width:0, height:0});

   const canvasRef=useRef(null); 
   const imageRef=useRef(null);

   const { crop, rotate, resize } = useTransform(); //custom hook
   const { base64ToBlobURL }=useUtilities();


   const { rotation: degree } = useSelector((state) => state.transformationReducer);
   const { tempRenderedImage } = useSelector((state) => state.imageUploadReducer);
   const { isZooming, isCropping, isResizing,  showRotationSlider } = useSelector((state) => state.stateReducer);
   const { originalDimension } = useSelector((state)=>state.imageReducer);
   
   useEffect(()=>{
    const loadImageOnCanvas=()=>{
        console.log('canvasImage',rotatedImage);
        const canvas=canvasRef.current;
        console.log('canvas',canvas);
        if(!isCropping && !isResizing){
            console.log('inside',canvas)
            const context=canvas.getContext('2d');
        const image=new Image();
        image.src= imageBlob;
        image.onload=()=>{
            canvas.width=image.width;
            canvas.height=image.height;
            context.drawImage(image,0,0);
        }
        }
    }
    loadImageOnCanvas();
    
   },[imageBlob, rotatedImage, isCropping, isResizing])

   const handleRotate = async () => {
    try {
      const rotatedImageDataURL = await rotate(imageBlob, canvasRef.current, degree);
      setRotatedImage(rotatedImageDataURL);
    } catch (error) {
      console.error('Error rotating image:', error);
    }
  };

  const handleResize=()=>{
    try{

    }
    catch(error){}
  }

  const renderImage= async ()=>{
    if(isCropping){
        const croppedImageBase64=crop(imageRef.current,null,cropData);
        const croppedImageBlobURL=base64ToBlobURL(croppedImageBase64,"image/jpeg");
       dispatch({type:'setTempRenderedImage',payload:croppedImageBlobURL});
       console.log('cropped image',croppedImageBlobURL);
    }
    else if(isResizing){
      const newWidth = originalDimension.width - ( resizeDelta.width * -1 );
      const newHeight = originalDimension.height - ( resizeDelta.height * -1 );
      const resizedImageBase64 = await resize(imageBlob, newWidth, newHeight);
      const resizedImageBlobURL=base64ToBlobURL(resizedImageBase64,"image/jpeg");
      console.log('resizedImageBase64',resizedImageBlobURL);
      dispatch({type:'setTempRenderedImage',payload:resizedImageBlobURL});
    }
    else if(isZooming){

    }
    else if(showRotationSlider){
        handleRotate();
    }
    else{

    }
  }

    return(
      <>
      {(isCropping || isResizing || showRotationSlider) && <button className={classes.done} onClick={renderImage}>Done</button>}
        <div>
    { isCropping && <ReactCrop
        crop={cropData}
        onChange={(newCrop) => setCropData(newCrop)}
        onDragStart={(e) => console.log(e)  }
        onDragEnd={(e) => console.log(e) }
        style={{ width: '100%', height: '100%' }}
        >
        <img src={imageBlob} ref={imageRef} />
        </ReactCrop>}
        {
            isResizing &&  <Resizable
            defaultSize={{ width: '100%', height: '100%' }}
            onResizeStop={(e, direction, ref, d) => setResizeDelta(d)}
          >
            <img
              src={imageBlob}
              alt="image"
            />
          </Resizable>
        }
      { !isCropping && !isResizing && <canvas className={classes.canvas} ref={canvasRef} style={{transform:`rotate(${degree}deg)`}}/>}
        </div>
         {/* <button onClick={handleRotate}>Rotate</button> */}
      </>
    )
}
export default ImageArea;




