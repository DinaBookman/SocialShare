{/*import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom"
import PhotosDisplay from "./PhotosDisplay";
import AddPhoto from "./AddPhoto";

function Photos(){
    const {albumId} = useParams();
     const [photos, setPhotos] = useState([]);
    async function getUserPhotos(id, start, limit) {
        try {
            const response = await fetch(`http://localhost:3000/albums/${albumId}/photos?_start=${0}&_limit=${8}`);
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const json_response = await response.json();
    
            if (json_response.length >= 1) {
                return json_response;
            } else {
                throw new Error("No photos found");
            }
        } catch (error) {
            console.error("Error:", error);
            throw error; // Rethrow the error for the calling code to handle
        }
    }

    useEffect(() => {
        getUserPhotos()
    }, [])

    
    return (<>
        <AddPhoto photos={photos} setPhotos={setPhotos} />
        <PhotosDisplay setPhotos={setPhotos} photos={photos} />
    </>)
} export default Photos
*/}
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotosDisplay from "./PhotosDisplay";
import AddPhoto from "./AddPhoto";

function Photos() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const [start,setStart]=useState(0)
    const limit=8;
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await fetch(`http://localhost:3000/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                setPhotos(data);
                console.log(data);
                setStart(prevStart => prevStart + 8);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };
        fetchData();
    }, [albumId, limit]);
    


    return (
        <>
            <AddPhoto photos={photos} setPhotos={setPhotos} />
            <PhotosDisplay setPhotos={setPhotos} photos={photos} start={start} setStart={setStart} limit={limit}/>
        </>
    );
}

export default Photos;