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
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    const { imageUploadHandler } = useImageUpload();

    const handleUpload = () => {

        if (!selectedImage && !imageLink) {
            return;
        }

        const API_ENDPOINT = 'http://localhost:4000/api/file/upload';


        if (selectedImage) {
            const image = new Image();
            image.src = URL.createObjectURL(selectedImage);
            image.onload = () => {
                setImageDimensions({
                    width: image.naturalWidth,
                    height: image.naturalHeight
                });
                dispatch({ type: 'setOriginalDimension', payload: { width: image.naturalWidth, height: image.naturalHeight } });
            };

            imageUploadHandler(selectedImage, API_ENDPOINT, imageLink);
        } else if (imageLink) {
            const tempImage = new Image();
            tempImage.crossOrigin = 'anonymous';
            tempImage.src = URL.createObjectURL(imageLink);
            tempImage.onload = () => {
                setImageDimensions({
                    width: tempImage.naturalWidth,
                    height: tempImage.naturalHeight
                });
                dispatch({ type: 'setOriginalDimension', payload: { width: tempImage.naturalWidth, height: tempImage.naturalHeight } });
            };

            imageUploadHandler(null, API_ENDPOINT, imageLink);
        } else {
            console.log('Please select an image or provide a link.');
        }

        dispatch({ type: 'hideDialog' });
    };


    const uploadViaFileInput = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageFile = e.target.files[0];
            setSelectedImage(imageFile);
            setImageLink('');
        }
    }

    const uploadViaLink = (e) => {
        setImageLink(e.target.value);
        setSelectedImage(null);
    }

    const handleUpload1 = () => {
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
                    <input type="file" id="upload_image" onChange={uploadViaFileInput} />
                    {/* <small>{selectedImage ? selectedImage.name : ''}</small> */}
                </div>
                {!selectedImage && <p>No image selected, <label htmlFor="upload_image">browse</label> </p>}
                {selectedImage && <p>{selectedImage.name}</p>}
                {/* <p>Upload image or paste link below...</p> */}
                {/* <div className={classes.paste_url}>
                    <input type="text" placeholder="Link..." value={imageLink} onChange={uploadViaLink} />
                </div> */}
                <button onClick={handleUpload}>Upload <AiOutlineUpload /></button>
            </div>
        </DraggableContainer>
    );
};

export default DialogBox;


/*

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
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    const { imageUploadHandler } = useImageUpload();

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageFile = e.target.files[0];
            setSelectedImage(imageFile);
            setImageLink('');

            const image = new Image();
            image.src = URL.createObjectURL(imageFile);
            image.onload = () => {
                setImageDimensions({
                    width: image.naturalWidth,
                    height: image.naturalHeight
                });
            dispatch({type:'setOriginalDimension',payload:{ width: image.naturalWidth,height: image.naturalHeight}});
            };
           
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



*/