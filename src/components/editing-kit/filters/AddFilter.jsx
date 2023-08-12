import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
const AddFilter = () => {
  const [expand, setExpand] = useState(false);
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
        
      </div>}
    </div>
  );
};
export default AddFilter;
