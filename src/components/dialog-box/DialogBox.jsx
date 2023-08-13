import React, { useState } from 'react';
import classes from './DialogBox.module.scss';
import DraggableContainer from '../dragable-container/DraggableContainer';
import { AiOutlineUpload, AiOutlineClose } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import useImageUpload from '../../hooks/useImageUpload';

const DialogBox = () => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageLink, setImageLink] = useState('');

    const { imageUploadHandler } = useImageUpload();

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
            setImageLink('');
        }
    };

    const handleLinkChange = (e) => {
        setImageLink(e.target.value);
        setSelectedImage(null);
    };

    const handleUpload = () => {
        const API_ENDPOINT = 'http://localhost:4000/api/file/upload';
        if (selectedImage) {
            imageUploadHandler(selectedImage, API_ENDPOINT, imageLink);
        } else if (imageLink) {
            imageUploadHandler(selectedImage, API_ENDPOINT, imageLink);
        } else {
            console.log('Please select an image or provide a link.');
        }
        dispatch({ type: 'hideDialog' });
    };

    return (
        <DraggableContainer>
            <div className={classes.dialog_box}>
                <AiOutlineClose onClick={() => dispatch({ type: 'hideDialog' })} />
                <div className={classes.upload}>
                    <label htmlFor="upload_image">
                        <FcAddImage />
                    </label>
                    <input type="file" id="upload_image" onChange={handleImageUpload} />
                    <small>{selectedImage ? selectedImage.name : ''}</small>
                </div>
                <p>Upload image or paste link below...</p>
                <div className={classes.paste_url}>
                    <input type="text" placeholder="Link..." value={imageLink} onChange={handleLinkChange} />
                </div>
                <button onClick={handleUpload}>Upload <AiOutlineUpload /></button>
            </div>
        </DraggableContainer>
    );
};

export default DialogBox;
