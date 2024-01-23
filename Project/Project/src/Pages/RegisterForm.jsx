 
import { useNavigate } from "react-router-dom";
import style from '../Pages/RegisterForm.module.css'

function RegisterForm(props){
  const navigate= useNavigate();
  const {userName,password}= props;

  function confirmRegistration(event){
      event.preventDefault();
      let newUser={
          "id":event.target[0].value,
          "name": event.target[1].value,
          "username": userName,
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
          "website": password,
          "company": {
            "name": event.target[10].value,
            "catchPhrase": event.target[11].value,
            "bs": event.target[12].value
          }
        }

      let localUser={
        "id":event.target[0].value,
          "name": event.target[1].value,
      }
      
      const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newUser)
          };
      fetch('http://localhost:3000/users', requestOptions)
      localStorage.setItem("User" ,[JSON.stringify(localUser)])
      navigate(`/users/${newUser.id}/home`)
  }

  

  return(
    <>
      <form className={style.registrationForm} onSubmit={confirmRegistration}>
      <label>ID</label>
      <input className={style.confirmRegInput} type="number" placeholder="Enter Id" required></input><br/>
      <label >Name</label>
      <input className={style.confirmRegInput} type="text" placeholder="Enter name" required></input><br/>
      <label >Email</label>
      <input className={style.confirmRegInput} type="email" placeholder="Enter email" required></input><br/>
      <labal>Enter your address</labal><br/>
      <label>Street</label>
      <input className={style.confirmRegInput} type="text" placeholder="Enter street" required></input><br/>
      <label>suite</label>
      <input className={style.confirmRegInput} type="text" placeholder="Enter suite" required></input><br/>
      <label>City</label>
      <input className={style.confirmRegInput} type="text" placeholder="Enter city" required></input><br/>
      <label>Zipcode</label>
      <input className={style.confirmRegInput} type="text" placeholder="Enter zipcode" required></input><br/>
      <label>Geo</label><br/>
      <label>Lat</label>
      <input className={style.confirmRegInput} type="number" placeholder="Enter lat" required></input><br/>
      <label>Lng</label>
      <input className={style.confirmRegInput} type="number" placeholder="Enter lng" required></input><br/>
      <label>Phone number</label>
      <input className={style.confirmRegInput} type="number" placeholder="Enter phonee number" required></input><br/>
      <label>Enter the company details</label><br/>
      <label>Enter name</label>
      <input className={style.confirmRegInput} type="text" placeholder="company's name"></input><br/>
      <labal>Enter catchPhrase</labal>
      <input className={style.confirmRegInput} type="text" placeholder="catchPhrase"></input><br/>
      <labal>Enter bs</labal>
      <input className={style.confirmRegInput} type="text" placeholder="bs"></input><br/>

      <button className={style.confirmRegBtn} type="submit">Confirm registration</button>
      </form>
      </>
  )
}

export default RegisterForm