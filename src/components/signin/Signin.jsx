import React from 'react'
import styles from './Signin.module.css'
import avatar from '../../images/avatar.png'

const Signin = () => {
    return (
        <div className="sign in">
          
    <div className={styles.box}>
    <img src={avatar} className={styles.avatar}></img>
<h2>LOG IN</h2>
<form>
<label>ENTER E-MAIL </label>

<input type="E-mail" placeholder="ENTER E-Mail"></input>
<label>PASSWORD</label>
<input type="PASWORD" placeholder="ENTER PASSWORD"></input>
<input type="submit" value="LOG IN"></input>
<a href="/register"> FORGET PASSWORD?</a>
</form>

</div>
        </div>
    )
}

export default Signin