import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Card } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';

const Booking = () => {
    const { user } = useAuth();
    const [booked, setBooked] = useState();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const onSubmit = data => {
        data.name = booked.name;
        data.status = 'Pending';
        data.image = booked.image;
        console.log(data)
        fetch('https://cryptic-wildwood-59668.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Ordered successfully')
                }
            })

        reset();

    };

    useEffect(() => {
        fetch(`https://cryptic-wildwood-59668.herokuapp.com/booking/${id}`)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [id])

    return (
        <div>
            <Navigation></Navigation>
            <div className='m-0 row'>
                <div className="col-md-7">
                    <Card style={{ width: '90%', margin: '5%' }}>
                        <Card.Img variant="top" src={booked?.image} />
                        <Card.Body>
                            <Card.Title>{booked?.name}</Card.Title>
                            <Card.Text>
                                <p>{booked?.description}</p>
                                <p>Price:AED{booked?.price}</p>
                                <p>Model:{booked?.model}</p>
                                <p>Warranty:{booked?.warranty}</p>
                                <p>Installment :{booked?.installment}</p>



                            </Card.Text>

                        </Card.Body>

                    </Card>
                </div>
                <div className="mt-4 col-md-5">
                    <form className='place-order' onSubmit={handleSubmit(onSubmit)}>
                        <h3>Please Fill up</h3>
                        <input defaultValue={user?.displayName} type='text' placeholder="name" {...register("name", { required: true })} /><br />
                        {errors.name && <span className='text-danger'>This field is required</span>} <br />
                        <input defaultValue={user?.email} type='email' placeholder="email" {...register("email", { required: true })} /><br />
                        {errors.email && <span className='text-danger'>This field is required</span>} <br />
                        <textarea type='text' placeholder="address" {...register("address", { required: true })} /> <br />
                        {errors.address && <span className='text-danger'>This field is required</span>} <br />
                        <input type='text' placeholder="Phone Number" {...register("phone", { required: true })} /> <br />
                        {errors.phone && <span className='text-danger'>This field is required</span>} <br />
                        <button type="submit">Place Order</button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;