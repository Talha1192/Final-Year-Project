import React,{ useState} from 'react'
import styles from './Signin.module.css'
import avatar from '../../images/avatar.png'

const Signin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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