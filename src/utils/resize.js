
  const resize = (canvas, image, width, height) => {
      const ctx = canvas.getContext('2d');

      const newWidth = width;
      const newHeight = height;

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.drawImage(image, 0, 0, newWidth, newHeight);

      const resizedImage = canvas.toDataURL('image/jpeg', 0.8);
      return resizedImage; 
    
  }

 
