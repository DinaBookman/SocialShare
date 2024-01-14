import { useLocation, useParams } from "react-router-dom";


function RegisterForm(props){

    const {userName,password}= props;
    function confirmRegistration(event){
        event.preventDefault();
        // let _ID=event.target[0].value;
        // let _name=event.target[1].value;
        console.log(userName)
        console.log(password)

        // let _email=event.target[2].value;
        // let _address={
            
        }
    

    return(
        <form onSubmit={confirmRegistration}>
        <label>ID</label>
        <input type="number" placeholder="Enter Id" required></input><br/>
        <label >Name</label>
        <input type="text" placeholder="Enter name" required></input><br/>
        <label >Email</label>
        <input type="email" placeholder="Enter email" required></input><br/>
        <labal>Enter your address</labal><br/>
        <label>Street</label>
        <input type="text" placeholder="Enter street" required></input><br/>
        <label>suite</label>
        <input type="text" placeholder="Enter suite" required></input><br/>
        <label>City</label>
        <input type="text" placeholder="Enter city" required></input><br/>
        <label>Zipcode</label>
        <input type="text" placeholder="Enter zipcode" required></input><br/>
        <label>Geo</label><br/>
        <label>Lat</label>
        <input type="number" placeholder="Enter lat" required></input><br/>
        <label>Lng</label>
        <input type="number" placeholder="Enter lng" required></input><br/>
        <label>Phone number</label>
        <input type="number" placeholder="Enter phonee number" required></input><br/>
        <label>Enter the company details</label><br/>
        <label>Enter name</label>
        <input type="text" placeholder="company's name"></input><br/>
        <labal>Enter catchPhrase</labal>
        <input type="text" placeholder="catchPhrase"></input><br/>
        <labal>Enter bs</labal>
        <input type="text" placeholder="bs"></input><br/>

        <button type="submit">Confirm registration</button>
        </form>
    )
}

export default RegisterForm