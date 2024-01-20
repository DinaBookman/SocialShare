import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom"
import AlbumsDisplay from "./AlbumsDisplay";
import AddAlbum from "./AddAlbum";

function Album(){
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/albums/?userId=${userId}`)
            .then(response => (response.json()))
            .then(res => (setAlbums(res)))
            .catch(err => console.log(err));
    }, [])

    return (<>
        <AddAlbum albuma={albums} setAlbumA={setAlbums} />
        <AlbumsDisplay setAlbums={setAlbums} albums={albums} />
    </>)
} export default Album