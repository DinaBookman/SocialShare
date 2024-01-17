import React,{useState} from "react";
import DisplayPost from "./DisplayPost";
function  PostsDisplay(props){
  const { postsData, setPostsData ,allPosts, setAllPosts}= props;
  const [filter,setFilter]=useState("All")
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [id,setId]=useState('')
  
       function isFiltered(post){
         switch(filter){
            case"All":
            return true
            case "ID":
                 return(post.id==id)? true:false;
            case "Title":
                 return(post.title==title)?true:false;
            case "Body":
                return(post.body==body)?true:false;
        }
    }
     
    
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
                    {isFiltered(post) && <DisplayPost  post={post} setPostsData={setPostsData} postsData={postsData} allPosts={allPosts} setAllPosts={setAllPosts}/>}
                </tr>
            ))}
            </tbody>
</table>
                <select name="filter by" id="filter" value={filter} onChange={(event)=>setFilter(event.target.value)}>
                    <option value="All">All</option>
                    <option value="ID">ID</option>
                    <option value="Title">Title</option>
                    <option value="Body">Body</option>
                </select>

     { filter==='Title'&&
      <>  <label>Enter wanted Title</label>
        <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}></input></>}
        { filter==='ID'&&
      <>  <label>Enter wanted Id</label>
        <input type="number" value={id} onChange={(event)=>setId(event.target.value)}></input></>}
        { filter==='Body'&&
      <>  <label>Enter wanted Body</label>
        <input type="number" value={body} onChange={(event)=>setId(event.target.value)}></input></>}
       
        
  </>)
}export default PostsDisplay