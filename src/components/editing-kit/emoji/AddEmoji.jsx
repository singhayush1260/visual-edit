import classes from "../../../pages/editor/image-edit-panel/ImageEditPanel.module.scss";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import EmojiPicker from 'emoji-picker-react';
import { EmojiStyle} from 'emoji-picker-react';
import { useSelector } from "react-redux";

const AddEmoji = () => {
  const [expand, setExpand] = useState(false);
  const { isDarkTheme } = useSelector((state) => state.themeReducer);
  return (
    <div className={classes.edit_container}>
      <div
        className={classes.edit_container__title}
        onClick={() => setExpand(!expand)}>
        <small>Emoji</small>
        {!expand && <BiChevronDown />}
        {expand && <BiChevronUp />}
      </div>
     { expand && <div className={classes.expanded_edit_container}>
         <EmojiPicker width="100%" height={280} theme={`${isDarkTheme ? 'dark' : 'light'}`} emojiStyle={EmojiStyle.GOOGLE}  previewConfig={false}/>
      </div>}
    </div>
  );
};
export default AddEmoji;
