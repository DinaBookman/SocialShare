 import React, {useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
function Info(){
    const navigate=useNavigate()
    const location=useLocation()
    const  user=location.state?.user || {};;
     
    
    
     
    return(<>
    <form>
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
                <p>website: {user.website}</p>
                <p>Company:</p>
                <p>Name: {user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>Bs: {user.company.bs}</p>
            </form>
            <button onClick={()=>navigate("/home")}>Back</button></>)
}
export default Info