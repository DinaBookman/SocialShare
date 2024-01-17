import React,{useState} from "react";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
import Comments from './Comments/Comments'
import { useEffect } from "react";
function DisplayPost(props){
    const {post,postsData,setPostsData}=props;
     const [showMore,setShowMore]=useState(false);
     const [showComments,setShowComments]=useState(false)
     const [updateTitle,setUpdatedTitle]=useState(post.title)
     const [updatedBody,setUpdatedBody]=useState(post.body)
     const [inUpdate,setInUpdated]=useState(false);
    
    useEffect(()=>{
    setUpdatedBody(post.body)
    setUpdatedTitle(post.Title)},[inUpdate]
    );
return(<>
<div style={showMore?{backGround:'#dcdcdc'}:{backGround:'white'}}></div>
    <td>{post.id}</td>
    <td>{post.title}</td>
    <td ><DeletePost post={post} postData={postsData} setPostsData={setPostsData} /></td>
   
    <UpdatePost post={post} postData={postsData} setPostsData={setPostsData}/>
    {showMore&&<button style={{backgroundColor: showComments}}></button>}
    {showMore&&showComments&&<Comments postId={post.id}/>}
    </>)
}
export default DisplayPost