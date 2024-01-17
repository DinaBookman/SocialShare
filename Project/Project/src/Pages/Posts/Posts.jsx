import PostsDisplay from "./PostsDisplay";
import { useNavigate } from "react-router-dom";
import React,{useState, useEffect} from "react"
import AddPost from "./AddPost";
 

function Posts(){
    const navigate= useNavigate();
    const [postsData, setPostsData]=useState([])
    const [isAddNew, setIsAddNew]=useState(false)

    let user=JSON.parse(localStorage.getItem("User")); 
     console.log(user)

    useEffect(()=>{ 
        fetch(`http://localhost:3000/posts/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(response=> {(setPostsData(response))
                setAllPosts([...response])
                console.log(response)
        })
        .catch(err=>console.log("err"));
    },[])



     

    function addPost(){
        setIsAddNew(true)
    }


    


       return( 
        <>
        <button onClick={()=>navigate("/home")}>Back</button>
            <h1>Posts</h1>
            <PostsDisplay setPostsData={setPostsData} postsData={postsData}/>
            <button onClick={addPost}>add new post</button>
            {isAddNew && <AddPost postsData={postsData} setPostsData={setPostsData}  setIsAddNew={setIsAddNew} userID={user.id}/>}
            
        </>
    )
}


export default Posts