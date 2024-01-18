import PostsDisplay from "./PostsDisplay";
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AddPost from "./AddPost";

function Posts() {
    const [posts, setPosts] = useState([])
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/posts/?userId=${userId}`)
            .then(response => (response.json()))
            .then(response => { (setPosts(response)) })
            .catch(err => console.log("err"));
    }, [])

    return (<>
        <h1>Posts</h1>
        <AddPost posts={posts} setPosts={setPosts} />
        <PostsDisplay setPosts={setPosts} posts={posts} />
    </>)
} export default Posts