import React from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = () => {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  handleChange = e => {
    this.setSate({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
};

login = (e)=> {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', this.state.credentials)
    .then(res =>{
        localStorage.setItem("token", res.data.payload)
        useHistory().push('/colors')
    })
    .catch((err) => console.log(err));
};

render() {
    return (
        <div>
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    name='password'
                    palceholder='Enter a password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
};
export default Login;
