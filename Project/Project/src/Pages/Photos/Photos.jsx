import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom"
import PhotosDisplay from "./PhotosDisplay";
import AddPhoto from "./AddPhoto";

function Photos(){
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/photos/?albumId=${albumId}`)
            .then(response => (response.json()))
            .then(res => (setPhotos(res)))
            .catch(err => console.log(err));
    }, [])

    return (<>
        <AddPhoto photos={photos} setPhotos={setPhotos} />
        <PhotosDisplay setPhotos={setPhotos} photos={photos} />
    </>)
} export default Photos
