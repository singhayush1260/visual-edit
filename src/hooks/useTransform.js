import { useState } from "react";
const useTransform = () => {


    const[resizedImage, setResizedImage]=useState(null);

    const TO_RADIANS = Math.PI / 180;

  const cropAndScale = (image, canvas, crop, scale = 1, rotate = 0) => {

  // console.log('image',image);
  // console.log('canvas',canvas);
  // console.log('crop',crop);

  //console.log('scale',scale);

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const pixelRatio = window.devicePixelRatio;

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  ctx.translate(-cropX, -cropY);
  ctx.translate(centerX, centerY);
  ctx.rotate(rotateRads);
  ctx.scale(scale, scale);
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  ctx.restore();

  return canvas.toDataURL("image/jpeg");
};

  const cropImage = (image, canvas, crop) => {
    cropAndScale(image, canvas, crop);
  };

  const scaleImage = (image, canvas, scale) => {
    cropAndScale(image, canvas, crop,scale);
  };
  const resizeImage = async (image, originalDimension, delta) => {
    
    const img=new Image();
    img.src=image;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        const newWidth = originalDimension.width - ( delta.width * -1 );
        const newHeight = originalDimension.height - ( delta.height * -1 );
  
        canvas.width = newWidth;
        canvas.height = newHeight;
  
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
  
        const resizedImageDataURL = canvas.toDataURL('image/jpeg', 0.8);
        console.log('resizedImageDataURL',resizedImageDataURL);
        setResizedImage(resizedImageDataURL);
      };
      return resizedImage;
  };
  return { cropAndScale, cropImage, scaleImage, resizeImage };
};
export default useTransform;
