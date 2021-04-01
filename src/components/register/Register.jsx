import axios from 'axios';
import React,{useState,useEffect} from 'react'

const Register = () => {
    const [name, setName] =useState();
    const [cnic,setCnic] = useState();                 
    const [address,setAddress] = useState();                 
    const [mobile,setMobile] = useState();                 
    const [email,setEmail] = useState();                 
    const [password,setPassword] = useState();                 
    const [date,setDate] = useState();                 
    
    const handelSubmit = (e)=>{
        e.preventDefault()
        const user = JSON.stringify({
            name,
            cnic,
            address,
            mobile,
            email,
            password,
            date
        })

        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          };
           console.log("Submit clicked",user)
                axios.post('http://localhost:5000/api/register',user,config)
                .then(res=>{
                    console.log("Saad Response  ",res)
                })
                .catch(err=>console.log(err))
           
        
   
    }
    return (
        <div className='register'>
            <form onSubmit={handelSubmit} className="daba">
                <h2>Register</h2>
                <div>
                    <label className="NAME">NAME</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" name="NAME" placeholder="NAME" />
                    <br />
                </div>
                <div>
                    <label className="CNIC">CNIC</label><br />
                    <input onChange={(e)=>{setCnic(e.target.value)}} type="" name="CNIC" placeholder="CNIC"></input>
                    <br />
                </div>
                <div>
                    <label>Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" name="Address" placeholder="Address"></input>
                </div>

                <div>
                    <label>MOBILE NUMBER</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} type="number" name="MOBILE NUMBER" placeholder="MOBILE NUMBER"></input>
                </div>

                <div>
                    <label>EMAIL</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" name="EMAIL" placeholder="EMAIL"></input>
                </div>
                <div>
                    <label>PASWORD</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="Password" name="password" placeholder="PAsSWORD"></input>
                </div>
                <div>
                    <label>Date</label><br />
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" name="date" placeholder="date of issue"></input>
                </div><div>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>

    )
}

export default Register


