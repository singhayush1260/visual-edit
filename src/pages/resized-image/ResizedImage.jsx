import { useSelector } from "react-redux";
const ResizedImage=()=>{

    const { imageName, originalImage, croppedImage } = useSelector((state) => state.imageUploadReducer);
    console.log('croppedImage',croppedImage);
return(
    <div>
        <p>resized image</p>
        <img src={croppedImage} alt="resized-image" />
    </div>
)
}
export default ResizedImage;