import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const [newUser, setNewUser] = useState(false);
    const { signInWithGoogle, createUser, updateUser, loginUser, error } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if (newUser) {
            createUser(data.email, data.password, data.name, location, history);

            console.log('register', newUser)
            reset();
        } else {
            loginUser(data.email, data.password, location, history);
            reset();
            console.log('login', newUser)
        }



    };
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className='mx-auto d-flex justify-content-center login '>
            <div>
                {!newUser ? <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Please Login</h3>
                    <input type='email' placeholder="email" {...register("email", { required: true })} /><br />
                    {errors.email && <span className='text-danger'>This field is required</span>} <br />
                    <input type='password' placeholder="password" {...register("password", { required: true })} /> <br />
                    {errors.password && <span className='text-danger'>This field is required</span>} <br />
                    <button type="submit">Login</button>
                    <p>New User? <span style={{ cursor: 'pointer' }} className='text-info' onClick={() => setNewUser(true)}>Register</span></p>
                    <p className='text-danger'>{error}</p>
                </form> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Please Register</h3>
                        <input placeholder="name" {...register("name", { required: true })} /><br />
                        {errors.name && <span className='text-danger'>This field is required</span>} <br />
                        <input type='email' placeholder="email" {...register("email", { required: true })} /><br />
                        {errors.email && <span className='text-danger'>This field is required</span>} <br />
                        <input type='password' placeholder="password" {...register("password", { required: true })} /> <br />
                        {errors.password && <span className='text-danger'>This field is required</span>} <br />
                        <button type="submit">Create an account</button>
                        <p>Already Registered? <span style={{ cursor: 'pointer' }} className='text-info' onClick={() => setNewUser(false)}>Login</span></p>

                    </form>}
                <button onClick={handleGoogleSignIn}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;