import { useDispatch } from "react-redux";
import axios from "axios";

const useImageUpload = () => {
  const dispatch = useDispatch();

  const imageUploadHandler = async (image, endpoint, link) => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const response = await axios.post(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const serializedImage = URL.createObjectURL(image);
        dispatch({ type: "setOriginalImage", payload: serializedImage });
        dispatch({ type: "setCroppedImage", payload: serializedImage });
        console.log("Server response:", response.data);
        return true;
      } catch (error) {
        console.error("Error uploading image:", error);
        return false;
      }
    } else if (link) {
      dispatch({ type: "setOriginalImage", payload: link });
        dispatch({ type: "setCroppedImage", payload: link });
      return true;
    } else {
      return false;
    }
  };

  return { imageUploadHandler };
};

export default useImageUpload;
