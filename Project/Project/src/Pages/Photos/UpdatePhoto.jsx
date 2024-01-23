import React, { useState, useEffect } from 'react';
import style from '../Photos/Photo.module.css'

function UpdatePhoto(props) {
    const { photo, photos, setPhotos } = props;
    const [updatedTitle, setUpdatedTitle] = useState(photo.title)
    const [inUpdate, setInUpdate] = useState(false);
    useEffect(() => {
        setUpdatedTitle(updatedTitle)
    }, [inUpdate]);

    const updatePhoto = (event) => {
        event.preventDefault()
        setInUpdate(false);
        if (photo.title === updatedTitle)
            return
        updatePhotoRequest("title", updatedTitle)
    }
    const updatePhotoRequest = (key, newValue) => {
        const updatedPhoto = { ...photo, [key]: newValue };
        fetch(`http://localhost:3000/photos/${photos.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                [key]: newValue
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
             setPhotos(photos.map((photo1) => photo1.id === photo.id ? updatedPhoto : photo1));
            
    }

    return (<>
        <button className={style.Btn} onClick={() => { setInUpdate((prev) => !prev) }}>🖋</button>
        {inUpdate && <form onSubmit={updatePhoto}>
            <strong >Title: </strong>
            <input type='text' id='title' value={updatedTitle} onChange={(event) => { setUpdatedTitle(event.target.value) }} required /><br />
                        <button type="submit">✔</button>
        </form>}</>)
} export default UpdatePhoto