import {useState} from 'react';

import axios from 'axios';

function initialState() {
    return {user: '', password:''};
}

function FormLogin(){

    const [values, setValues] = useState(initialState);

    function onChange(event){
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]:value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('user: ' + values.user)
        console.log('password: ' + values.password)


    }

    return(
        <form onSubmit={handleSubmit} className="form-login" style={{display: 'flex', flexDirection: 'column', width: 200}}>
            <div className="user-login">
                <label htmlFor="user">Enter user</label>
                <input type="text" name="user" id="user" onChange={onChange} value={values.user}/>
            </div>
            <div className="user-password">    
                <label htmlFor="password">Enter password</label>
                <input type="password" name="password" id="password" onChange={onChange} value={values.password}/>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
        </form>
     )
};

export default FormLogin;


    // const [user,setUser] = useState('')
    // const [password,setPassword] = useState('')
    
    // const handleChangeUser = (event) => {
    //     setUser(event.target.value)
    // }

    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value)
    // }
