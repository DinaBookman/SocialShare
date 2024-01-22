import React from "react";
import DeletePhoto from "./DeletePhoto";
import UpdatePhoto from "./UpdatePhoto"

function DisplayPhoto(props) {
    const { photo, photos, setPhotos } = props;

    return (<>
         <img src={photo.thumbnailUrl} alt={photo.title} /> <br/>
        <UpdatePhoto photo={photo} setPhotos={setPhotos} photos={photos} />
        <DeletePhoto photo={photo} setPhotos={setPhotos} photos={photos} />
    </>)
}
export default DisplayPhoto