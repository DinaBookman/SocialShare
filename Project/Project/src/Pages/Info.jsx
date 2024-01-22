 import React ,{useEffect, useState} from "react";
 import { useParams } from "react-router-dom"
function Info(){
    const { userId } = useParams();
     const [user,setUser]=useState(null)
     useEffect(() => {
        fetch(`http://localhost:3000/users/?id=${userId}`)
          .then(response => response.json())
          .then(data => {
            if (data && data.length > 0) {
              setUser(data[0]);
            } else {
              console.log("User not found");
            }
          })
          .catch(err => console.log(err));
      }, [userId]);
     
    return(<>
    {user &&<div><form>

                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>User Name: {user.username}</p>
                <p>User Email: {user.email}</p>
                <p>User Adress:</p>
                <p>street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
                <p>User Geo</p>
                <p>Lat: {user.address.geo.lat}</p>
                <p>Lng: {user.address.geo.lng}</p>
                <p>Phone: {user.phone}</p>
                <p>Company:</p>
                <p>Name: {user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>Bs: {user.company.bs}</p>
            </form></div>}</>)
}
export default Info