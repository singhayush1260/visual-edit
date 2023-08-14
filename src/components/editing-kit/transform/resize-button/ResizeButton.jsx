import classes from './ResizeButton.module.scss';
import { useDispatch } from "react-redux";
import DraggableContainer from "../../../dragable-container/DraggableContainer";

const ResizeButton = () => {
  const dispatch = useDispatch();

  const handleRotate = (degree) => {
    dispatch({ type: "rotate", payload: degree });
  };
  return (
    <DraggableContainer>
      <div className={classes.rotation_slider_container}>
        <CircularSlider
          width={70}
          minValue={0}
          maxValue={360}
          label="Angle"
          labelColor="black"
          labelFontSize="10px"
          valueFontSize="12px"
          verticalOffset="0rem"
          knobSize={25}
          knobPosition="top"
          onChange={(degree) => handleRotate(degree)}
        />
      </div>
    </DraggableContainer>
  );
};
export default ResizeButton;
