import { useLocation, useParams } from "react-router-dom";


function RegisterForm(props){

    const {userName,password}= props;
    function confirmRegistration(event){
        event.preventDefault();
        console.log(userName)
        console.log(password)
        let newUser={
            "id":event.target[0].value,
            "name": event.target[1].value,
            "username":  userName,
            "email": event.target[2].value,
            "address": {
              "street": event.target[3].value,
              "suite": event.target[4].value,
              "city": event.target[5].value,
              "zipcode": event.target[6].value,
              "geo": {
                "lat": event.target[7].value,
                "lng": event.target[8].value
              }
            },
            "phone": event.target[9].value,
            "website":   password,
            "company": {
              "name": event.target[10].value,
              "catchPhrase": event.target[11].value,
              "bs": event.target[12].value
            }
          }
        
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            };
        fetch('http://localhost:3000/users', requestOptions)
                .then(response => response.json())      
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