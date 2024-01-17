import PostsDisplay from "./PostsDisplay";
import { useNavigate } from "react-router-dom";
import React,{useState, useEffect} from "react"
import AddNewPost from "./AddNewPost";
import Filter from "../Filter";

function Posts(){
    const navigate= useNavigate();
    const [postsData, setPostsData]=useState([])
    const [allPosts, setAllPosts]=useState([]);
    const [isAddNew, setIsAddNew]=useState(false)
    const [filter, setFitler]=useState("");
    let user=JSON.parse(localStorage.getItem("User")); 
    if(user.length != 0)
        user=user[0];

    useEffect(()=>{ 
        fetch(`http://localhost:3000/posts/?userId=${user.id}`)
        .then(response => (response.json()))
        .then(response=> {(setPostsData(response))
                setAllPosts([...response])
                console.log(response)
        })
        .catch(err=>console.log("err"));
    },[])



    function showPostByfilter(event){
        event.preventDefault();
        let choice=event.target.value;
        console.log(choice)
        setFitler(choice)
    }

    function addPost(){
        setIsAddNew(true)
    }


    


       return( 
        <>
        <button onClick={()=>navigate("/home")}>Back</button>
            <h1>Posts</h1>
            <PostsDisplay setAllPosts={setAllPosts} allPosts={allPosts} setPostsData={setPostsData} postsData={postsData}/>
            <form onChange={showPostByfilter}>
                <label>search post by</label>
                <select name="filter by" id="filter">
                    <option value="ID">ID</option>
                    <option value="Title">Title</option>
                </select>
            </form>

            <button onClick={addPost}>add new post</button>
            {isAddNew && <AddNewPost postsData={postsData} setPostsData={setPostsData}  allPosts={allPosts} setAllPosts={setAllPosts} setIsAddNew={setIsAddNew} userID={user.id}/>}
            {!filter=='' && <Filter filter={filter} postsData={postsData} setFitler={setFitler} setPostsData={setPostsData} userID={user.id} allPosts={allPosts} />}
        </>
    )
}


export default Posts