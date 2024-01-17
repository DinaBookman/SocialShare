import React from "react";
import DisplayPost from "./DisplayPost";
function  PostsDisplay(props){
  const { postsData, setPostsData ,allPosts, setAllPosts}= props;
  
  return(<>
  <table>
             <thead>
                <tr>
                <th>Id</th>
                <th>Title</th> 
                </tr>
                
                 
            </thead>
            <tbody>
             
            {postsData.map((post) => (
                <tr key={post.id} >
                    {<DisplayPost  post={post} setPostsData={setPostsData} postsData={postsData} allPosts={allPosts} setAllPosts={setAllPosts}/>}
                </tr>
            ))}
    
                 {/*postsData.map((post,index)=>{
                    return(<><tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td ><button onClick={()=>deletePost(post.id)}>🗑️</button></td></tr>
                     </>)
                 })*/}
            </tbody>
        </table>
  </>)
}export default PostsDisplay