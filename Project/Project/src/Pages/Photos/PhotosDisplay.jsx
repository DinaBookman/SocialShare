import React  from "react";
import DisplayPhoto from "./DisplayPhoto";

function  PhotosDisplay(props) {
  const { photos, setPhotos } = props;
  return (<>
     {photos.map((photo) => <div key={photo.id}><DisplayPhoto photo={photo} setPhotos={setPhotos} photos={photos} /></div>)}
  </>)
} export default PhotosDisplay