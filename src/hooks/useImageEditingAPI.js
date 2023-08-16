import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useImageEditingAPI = () => {
  const [editedImage, setEditedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const editImage = async (imageName, editingInfo, endpoint) => {
    setIsLoading(true);
    setError(null);
    let a;
    try {
      let body = {};
      if (editingInfo.resize) {
        body = { imageName, resize: editingInfo.resize };
      }
      const response = await axios.post(endpoint, body);
      const blob = new Blob([response.data], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      a=imageUrl;
      console.log('image url', imageUrl);
      //dispatch({ type: 'setCroppedImage', payload: imageUrl });
      console.log('image url', imageUrl);
      //setEditedImage(imageUrl);
    } catch (error) {
      setError('An error occurred while editing the image');
    } finally {
      setIsLoading(false);
    }
    return a;
  };

  return { editedImage, isLoading, error, editImage };
};

export default useImageEditingAPI;
