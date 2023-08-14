import classes from "../../pages/editor/image-canvas/ImageCanvas.module.scss";
import { useSelector, useDispatch } from "react-redux";

const RealTimeCropData = () => {

    const { cropData } = useSelector((state) => state.transformationReducer);
    const { isCropping } = useSelector((state) => state.stateReducer);
    const { width = 0, height = 0, x = 0, y = 0 } = cropData;
    return (
        <>
            {
                isCropping && cropData && <div className={classes.realtime_edit_data}>
                    <small>X: {parseInt(x)} </small>
                    <small>Y: {parseInt(y)}</small>
                    <small>W: {parseInt(width)}</small>
                    <small>H: {parseInt(height)}</small>
                </div>
            }
        </>
    );
};
export default RealTimeCropData;



