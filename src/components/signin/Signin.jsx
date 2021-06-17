import React,{ useState} from 'react'
import styles from './Signin.module.css'
import avatar from '../../images/avatar.png'
import axios from 'axios';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handelSubmit = (e)=>{
        e.preventDefault()

        const user = JSON.stringify({
          
            email,
            password,
          
        })

        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          };
           console.log("Submit clicked",user)
                axios.post('http://localhost:5000/api/signin',user,config)
                .then(res=>{
                    console.log("LogedIn ",res)
                    toast.success(res.data.message);
                    navigate('/signin')
                })
                .catch((err)=>{
                    // toast.error(res.data.message);
                    toast.error(err.response.data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    console.log(err.response.message)})
    }


    return (    
        <div className="sign in">

            <div className={styles.box}>
                <img src={avatar} className={styles.avatar}></img>
                <h2>LOG IN</h2>
                <form>
                    <label>ENTER E-MAIL </label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="E-mail" placeholder="ENTER E-Mail"></input>
                    <label>PASSWORD</label>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="PASWORD" placeholder="ENTER PASSWORD"></input>
                    <input type="submit" value="LOG IN"></input>
                    <a href="/register"> FORGET PASSWORD?</a>
                </form>
            </div>
        </div>
    )
}

export default Signin