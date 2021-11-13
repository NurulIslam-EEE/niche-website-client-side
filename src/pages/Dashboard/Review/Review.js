import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        data.picture = user?.photoURL;
        fetch('https://cryptic-wildwood-59668.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review aded successfully')
                }
                console.log(data);
            })
        reset();

    }
    return (
        <div>
            <h2 className='mt-3 text-center'>Review</h2>
            <form className='mb-3 text-center review' onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user?.displayName} type='text' placeholder="name" {...register("name", { required: true })} /><br />
                {errors.name && <span className='text-danger'>This field is required</span>} <br />
                <input defaultValue={user?.email} type='email' placeholder="email" {...register("email", { required: true })} /> <br />
                {errors.email && <span className='text-danger'>This field is required</span>} <br />
                <textarea type='text' placeholder="Your Message" {...register("message", { required: true })} /><br />
                {errors.message && <span className='text-danger'>This field is required</span>} <br />

                <input id="quantity" type='number' placeholder="Please rate between 1-5" {...register("rating", { required: true })} min="1" max="5" /> <br />
                {errors.rating && <span className='text-danger'>This field is required</span>} <br />
                <button className='review-btn' type="submit">Submit</button>

            </form>
        </div>
    );
};

export default Review;