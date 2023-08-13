import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const AddFilter = () => {
  const [expand, setExpand] = useState(false);
  const[selectedFilter, setSelectedFilter]=useState(null);
  return (
    <div className={classes.edit_container}>
      <div
        className={classes.edit_container__title}
        onClick={() => setExpand(!expand)}>
        <small>Filters</small>
        {!expand && <BiChevronDown />}
        {expand && <BiChevronUp />}
      </div>
     { expand && <div className={classes.expanded_edit_container}>
          <div className={classes.expanded_edit_container__filters}>
            {/* <div className={classes.selected_filter}>
              <small> {selectedFilter ? selectedFilter : "No filter selected"} </small>
            </div> */}
            <select>
        <option value="none">No Filter</option>
        <option value="grayscale">Grayscale</option>
        <option value="sepia">Sepia</option>
        <option value="invert">Invert</option>
        <option value="brightness">Brightness</option>
        <option value="sepia">Sepia</option>
        <option value="invert">Invert</option>
        <option value="brightness">Brightness</option>
      </select>
            <button>Apply</button>
          </div>
      </div>}
    </div>
  );
};
export default AddFilter;
/*
   <select>
        <option value="none">No Filter</option>
        <option value="grayscale">Grayscale</option>
        <option value="sepia">Sepia</option>
        <option value="invert">Invert</option>
        <option value="brightness">Brightness</option>
        <option value="sepia">Sepia</option>
        <option value="invert">Invert</option>
        <option value="brightness">Brightness</option>
      </select>

       <div className={classes.option}>
                  <div className={classes.select}>Sepia</div>
                  <div className={classes.select}>Sepia</div>
                  <div className={classes.select}>Sepia</div>       
                  <div className={classes.select}>Sepia</div>
                  <div className={classes.select}>Sepia</div>
                  <div className={classes.select}>Sepia</div>
                  <div className={classes.select}>Sepia</div>
                  <div className={classes.select}>Sepia</div>
              </div>

*/