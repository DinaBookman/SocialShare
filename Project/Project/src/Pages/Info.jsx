 import React ,{useEffect, useState,useContext} from "react";
 import { useParams } from "react-router-dom"
 import { UserContext}from "../App";
function Info(){
    const {currentUser}=useContext(UserContext)
    return(<>
     <div><form>
                <p>ID: {currentUser.id}</p>
                <p>Name: {currentUser.name}</p>
                <p>User Name: {currentUser.username}</p>
                <p>User Email: {currentUser.email}</p>
                <p>User Adress:</p>
                <p>street: {currentUser.address.street}</p>
                <p>Suite: {currentUser.address.suite}</p>
                <p>City: {currentUser.address.city}</p>
                <p>Zipcode: {currentUser.address.zipcode}</p>
                <p>User Geo</p>
                <p>Lat: {currentUser.address.geo.lat}</p>
                <p>Lng: {currentUser.address.geo.lng}</p>
                <p>Phone: {currentUser.phone}</p>
                <p>Company:</p>
                <p>Name: {currentUser.company.name}</p>
                <p>CatchPhrase: {currentUser.company.catchPhrase}</p>
                <p>Bs: {currentUser.company.bs}</p>
            </form></div></>)
}
export default Info