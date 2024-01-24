import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotosDisplay from "./PhotosDisplay";
import AddPhoto from "./AddPhoto";

function Photos() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const limit=8;
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await fetch(`http://localhost:3000/photos?albumId=${albumId}&_start=0&_limit=${limit}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                setPhotos(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };
        fetchData();
    },[]);
    


    return (
        <>
            <h1>Photos</h1>
            <AddPhoto photos={photos} setPhotos={setPhotos} />
            <PhotosDisplay setPhotos={setPhotos} photos={photos}  limit={limit}/>
        </>
    );
}

export default Photos;