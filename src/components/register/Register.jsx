import React from 'react'

const Register = () => {
    return (
        <div className='register'>
              <form className="daba">
            <h2>Register</h2>
            <div>
            <label className="NAME">NAME</label>
              <input type="text" name="NAME" placeholder="NAME"/>
              <br/>
                  </div>
 <div> 
        <label className="CNIC">CNIC</label><br/>
        <input type="" name="CNIC" placeholder="CNIC"></input>
        <br/>
    </div>
   <div>
        <label>Address</label>
        <input type="text" name="Address" placeholder="Address"></input>
    </div>
   
    <div>
        <label>MOBILE NUMBER</label>
        <input type="number" name="MOBILE NUMBER" placeholder="MOBILE NUMBER"></input>
    </div>
    
    <div>
        <label>EMAIL</label>
        <input type="text" name="EMAIL" placeholder="EMAIL"></input>
    </div>
<div>
        <label>Date</label><br/>
        <input type="date" name="date"  placeholder="date of issue"></input>
    </div><div>
            </div>
    <input type="submit" value="Submit"></input>
        </form>
        </div>
        
    )
}

export default Register


