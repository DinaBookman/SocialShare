import React from "react";
function DeletePost(props) {
    const { post, posts, setPosts } = props;

    function deletePost(ID) {
        fetch(`http://localhost:3000/posts/${ID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            setPosts(posts.filter(post => post.id !== ID));
        }).catch(error => {
            console.error(error);
        });
    }

    return (<><button onClick={() => deletePost(post.id)}>🗑️</button></>)
}
export default DeletePost