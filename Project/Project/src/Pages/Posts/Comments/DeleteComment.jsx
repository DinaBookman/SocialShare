import React from "react";
function DeleteComment(props) {
    const { comment, comments, setComments} = props;

    function handleDelete(ID) {
        fetch(`http://localhost:3000/comments/${ID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            setComments(comments.filter(comment => comment.id !==ID));
        }).catch(error => {
            console.error(error);
        });
    }

    return (<>
        <button onClick={() => handleDelete(comment.id)}>🗑️</button>
    </>)
} export default DeleteComment