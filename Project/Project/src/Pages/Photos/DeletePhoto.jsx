import React from "react";
function DeletePhoto(props) {
    const { photo, photos, setPhotos } = props;

    function handleDelete(ID) {
        fetch(`http://localhost:3000/photos/${ID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            setPhotos(photos.filter(photo => photo.id !==ID));
        }).catch(error => {
            console.error(error);
        });
    }

    return (<>
        <button onClick={() => handleDelete(photo.id)}>🗑️</button>
    </>)
} export default DeletePhoto
