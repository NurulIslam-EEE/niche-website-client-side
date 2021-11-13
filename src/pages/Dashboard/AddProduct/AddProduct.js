import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch('https://cryptic-wildwood-59668.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully')
                }
            })
        console.log(data)
        reset();
    }
    return (
        <div>
            <h2 className='m-2 text-center'>Add A Product</h2>
            <form className='m-2 text-center add-product' onSubmit={handleSubmit(onSubmit)}>

                <input type='text' placeholder="name" {...register("name", { required: true })} /><br />
                {errors.name && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="image" {...register("image", { required: true })} /><br />
                {errors.image && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="description" {...register("description", { required: true })} /><br />
                {errors.description && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="Model Year" {...register("model", { required: true })} /> <br />
                {errors.model && <span className='text-danger'>This field is required</span>} <br />
                <input type='number' placeholder="Price" {...register("price", { required: true })} /> <br />
                {errors.price && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="installment" {...register("installment", { required: true })} /> <br />
                {errors.installment && <span className='text-danger'>This field is required</span>} <br />
                <input type='text' placeholder="Warranty" {...register("warranty", { required: true })} /> <br />
                {errors.Warranty && <span className='text-danger'>This field is required</span>} <br />
                <button type="submit">Add Products</button>

            </form>
        </div>
    );
};

export default AddProduct;