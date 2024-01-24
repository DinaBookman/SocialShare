import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumsDisplay from "./AlbumsDisplay";
import AddAlbum from "./AddAlbum";

function Album() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/albums/?userId=${userId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        console.error("Error fetching albums:", err);
        setError("Error fetching albums. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading albums...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <h1>Albums</h1>
          <AddAlbum albums={albums} setAlbums={setAlbums} />
          <AlbumsDisplay setAlbums={setAlbums} albums={albums} />
        </>
      )}
    </div>
  );
}

export default Album;