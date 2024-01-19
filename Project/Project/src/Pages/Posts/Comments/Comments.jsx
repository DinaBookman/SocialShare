import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom"
import AddComment from "./AddComment";
import CommentsDisplay from "./CommentsDisplay";
function Comments(props){
    const [comments, setComments] = useState([]);
    const { postId } = props
              
    useEffect(() => {
        fetch(`http://localhost:3000/comments/?postId=${postId}`)
            .then(response => (response.json()))
            .then(res => (setComments(res)))
            .then(res=>console.log(res))
            .catch(err => console.log(err));
    }, [])

    return (<>
        <br/><AddComment comments={comments} setComments={setComments} postId={postId}/>
        <CommentsDisplay setComments={setComments} comments={comments}/>
    </>)
} export default Comments
