import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const [success, setSuccess] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const user = { email: data?.email }
        fetch('https://cryptic-wildwood-59668.herokuapp.com/users/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess('Successfully made admin');
                    reset();
                } else {
                    setSuccess('user not registered or already admin');
                }
            })
        console.log(data)

    };
    return (
        <div className='p-4 text-center make-admin'>
            <h4>Make User admin</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type='email' placeholder="email" {...register("email", { required: true })} /><br />
                {errors.email && <span className='text-danger'>This field is required</span>} <br />

                <p className='text-danger'>{success}</p>
                <button type="submit">Submit</button>


            </form>
        </div>

    );
};

export default MakeAdmin;