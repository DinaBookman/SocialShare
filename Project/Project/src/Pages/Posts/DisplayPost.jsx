import React from "react";
function DisplayPost(props){
    const {post,postsData,allPosts,setAllPosts,setPostsData}=props;
    function deletePost(ID) 
    {   
        fetch(`http://localhost:3000/posts/${ID}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        }}).then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
            setPostsData(postsData.filter(post => post.id !== ID) );
            setAllPosts(allPosts.filter(post => post.id !== ID))
        }).catch(error => {
        console.error(error);     
        });
    }
return(<>
    <td>{post.id}</td>
    <td>{post.title}</td>
    <td ><button onClick={()=>deletePost(post.id)}>🗑️</button></td>
     </>)
}
export default DisplayPost