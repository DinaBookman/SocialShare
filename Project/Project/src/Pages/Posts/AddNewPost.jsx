import React from "react";

function AddNewPost(props){

    const { allPosts,postsData,setAllPosts,setPostsData,setIsAdding}=props;
    function addPost(event){
        event.preventDefault();

        let newPost={        
            "userId": props.userID,
            "id": event.target[0].value,
            "title": event.target[1].value,
            "body": event.target[2].value
        }
        const newRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        };
        fetch(`http://localhost:3000/posts`, newRequest)
        .then(data => {
            setPostsData([...postsData,newPost]);
            setAllPosts([...allPosts ,newPost]) ; 
        })
        .catch(error => console.error(error));
         setIsAddNew(false)
    }

    return (
        <>
        <form onSubmit={addPost}>
            <label>Enter post id</label>
            <input type="number" placeholder="postId"></input>
            <label>Enter post title</label>
            <input type="text" placeholder="title"></input>
            <label>Enter post body</label>
            <input type="text" placeholder="body"></input>
            <button type="submit">add</button>
        </form>
        </>
    )
}

export default AddNewPost