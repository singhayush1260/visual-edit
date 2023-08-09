import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";

const Adjustment=()=>{
    return(
        <div className={classes.edit_container}>
        <small>Adjustement</small>
         <div className={classes.edit_controller}>
            <small>Brightness</small>
            <input type="range" min={1} step={0.1} />
         </div>
         <div className={classes.edit_controller}>
            <small>Contrast</small>
            <input type="range" min={1} step={0.1} />
         </div>
         <div className={classes.edit_controller}>
            <small>Hue</small>
            <input type="range" min={1} step={0.1} />
         </div>
         <div className={classes.edit_controller}>
            <small>Saturation</small>
            <input type="range" min={1} step={0.1} />
         </div>
      </div>
    )
}
export default Adjustment;