import React,{useState} from "react"

function Filter(props){

    const {filter,postsData,setFilter,userID}=props;
    const [filterData,setFilterData]=useState(postsData)

    function filterPosts(event){
        console.log(userID)
        event.preventDefault();
        let wantedItem=event.target[0].value;
        console.log(wantedItem)
        if(wantedItem==''){
            setFilterData(postsData)
            return;
        }
        switch(filter){
            case "ID":
                fetch(`http://localhost:3000/posts/?userId=${userID}&id=${wantedItem}`)
                .then(response => (response.json()))
                .then(response=>{
                    (setFilterData(response))
                    
                })
                break
            case "Title":
                fetch(`http://localhost:3000/posts/?userId=${userID}&title=${wantedItem}`)
                .then(response => (response.json()))
                .then(response=>{
                    console.log(response)
                    setFilterData(response)
                })
                break
            case "Completed":
                 setFilterData(postsData.filter((todo)=>todo.completed===true))
                 break
        }
        setFilterData('')
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