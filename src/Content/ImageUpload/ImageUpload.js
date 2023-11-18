import React, { useRef, useState } from 'react';

import './ImageUpload.css';

function ImageUpload() {
    const imageRef = useRef(null);
    const inputRef = useRef(null);

    const [imageSrc, setImageSrc] = useState('./placeholder.svg'); 

    const handleImageChange = () => {
        if (inputRef.current && inputRef.current.files.length > 0) {
            setImageSrc(URL.createObjectURL(inputRef.current.files[0]));
        }
    };

    return (
        <div className='image-upload-holder'>
            <img ref={imageRef} className="image-holder" alt="Uploaded" src={imageSrc} />
            <input
                ref={inputRef}
                type="file"
                className="upload-input"
                onChange={handleImageChange}
            />
            <a className='change-link-holder'>Change</a>
        </div>
    );
}

export default ImageUpload;
