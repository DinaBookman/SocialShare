import React,{useState} from "react"

function Filter(props){

    const {filter,postsData,setFitler,setPostsData,userID,allPosts}=props;

    function filterPosts(event){
        console.log(userID)
        event.preventDefault();
        let wantedItem=event.target[0].value;
        console.log(wantedItem)
        if(wantedItem==''){
            setPostsData(allPosts)
            return;
        }
        switch(filter){
            case "ID":
                fetch(`http://localhost:3000/posts/?userId=${userID}&id=${wantedItem}`)
                .then(response => (response.json()))
                .then(response=>{
                    (setPostsData(response))
                    // console.log(postsData)
                })
            case "Title":
                fetch(`http://localhost:3000/posts/?userId=${userID}&title=${wantedItem}`)
                .then(response => (response.json()))
                .then(response=>{
                    console.log(response)
                    setPostsData(response)
                })
        }
        setFitler('')
    }




    return(
        <>
        <form onSubmit={filterPosts}>
        <label>Enter wanted {filter}</label>
        <input type="text"></input>
        <button type="submit">filter</button>
        </form>
        </>
    )
}


export default Filter