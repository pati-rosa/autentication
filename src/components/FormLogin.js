import {useState} from 'react';

import axios from 'axios';

function FormLogin(){

    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    
    const handleChangeUser = (event) => {
        setUser(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('user: ' + user)
        console.log('password: ' + password)


    }

    return(
        <form onSubmit={handleSubmit} className="form-login" style={{display: 'flex', flexDirection: 'column', width: 200}}>
            <div className="user-login">
                <label htmlFor="user">Enter user</label>
                <input type="text" name="user" id="user" value={user} onChange={handleChangeUser}/>
            </div>
            <div className="user-password">    
                <label htmlFor="password">Enter password</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChangePassword}/>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
        </form>
     )
};

export default FormLogin;