import React,{useState, useEffect} from "react"
import AddNewPost from "./AddNewPost";
import Filter from "./Filter";

function Posts(){
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
            <h1>Posts</h1>
            <table>
             <thead>
                <th>Id</th>
                <th>Title</th> 
                 
            </thead>
            <tbody>
                 {postsData.map((post,index)=>{
                    return(<><tr key={index}></tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td ><button onClick={()=>deletePost(todo.id)}>🗑️</button></td>
                     </>)
                 })}
            </tbody>
        </table>
            <form onChange={showPostByfilter}>
                <label>search post by</label>
                <select name="filter by" id="filter">
                    <option value="ID">ID</option>
                    <option value="Title">Title</option>
                </select>
                {/* <input type="text" placeholder="enter wanted value"></input> */}
                {/* <input type="number" placeholder="enter wanted post's ID"></input> */}
                {/* <button type="submit" >search</button> */}
            </form>

            <button onClick={addPost}>add new post</button>
            {isAddNew && <AddNewPost setIsAddNew={setIsAddNew}/>}
            {!filter=='' && <Filter filter={filter} postsData={postsData} setFitler={setFitler} setPostsData={setPostsData} userID={user.id} allPosts={allPosts} />}
        </>
    )
}

export default Posts