import React, { useState }  from "react";
import DisplayPhoto from "./DisplayPhoto";
import {useParams } from "react-router-dom"
function  PhotosDisplay(props) {
    const {albumId} = useParams();
    const { photos, setPhotos ,start,setStart,limit} = props;
     
    async function getMorePhotos(albumId,start,limit){
        const morePhotos = await getUserPhotos(albumId, start, limit);
         setPhotos(photos.concat(morePhotos));
         setStart(prevStart=>prevStart+8);
     };
    async function getUserPhotos(albumId, start, limit) {
        try {
            
            const response =  await fetch(`http://localhost:3000/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`);
    
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
            throw error; 
        }
    }
     
  return (<>
  
     {photos.map((photo) => <p key={photo.id}><DisplayPhoto photo={photo} setPhotos={setPhotos} photos={photos} /></p>)}
     <button onClick={()=>getMorePhotos(albumId,start,limit)}>More</button>
  </>)
} export default PhotosDisplay