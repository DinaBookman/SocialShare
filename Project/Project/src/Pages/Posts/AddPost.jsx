import React from "react";

function AddPost(props){
    let id;
    const { postsData,setPostsData,setIsAddNew}=props;
     
        async function  addPost(event) {
        event.preventDefault()
        const response = await fetch("http://localhost:3000/nextID");
        const json = await response.json();
        const { nextPostId } = json[0];
         id=nextPostId
         fetch("http://localhost:3000/nextID/1", {
            method: "PATCH",
            body: JSON.stringify({
                "nextPostId": id + 1  
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        let newPost={        
            "userId": props.userID,
            "id": id.toString(),
            "title": event.target[0].value,
            "body": event.target[1].value
        }
        const newRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        };
        fetch(`http://localhost:3000/posts`, newRequest)
        .then(data => {
            setPostsData([...postsData,newPost]);
            
        })
        .catch(error => console.error(error));
         setIsAddNew(false)
    }

    return (
        <>
        <form onSubmit={addPost}>
            <label>Enter post title</label>
            <input type="text" placeholder="title"></input>
            <label>Enter post body</label>
            <input type="text" placeholder="body"></input>
            <button type="submit">add</button>
        </form>
        </>
    )
}

export default AddPost