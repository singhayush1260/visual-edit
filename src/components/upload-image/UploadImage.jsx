import { useDispatch } from "react-redux";
import axios from "axios";

const useImageUpload = () => {
  const dispatch = useDispatch();

  const handleImageUpload = async (e, url) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const serializedImage = URL.createObjectURL(image);
      dispatch({ type: "upload", payload: serializedImage });
      dispatch({ type: "setCroppedImage", payload: serializedImage });

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return { handleImageUpload };
};

export default useImageUpload;
