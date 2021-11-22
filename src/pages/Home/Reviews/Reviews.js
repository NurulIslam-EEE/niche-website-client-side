import React, { useEffect, useState } from 'react';
import { RatingView } from 'react-simple-star-rating'
import useAuth from '../../../hooks/useAuth';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();
    console.log(user)
    useEffect(() => {
        fetch('https://cryptic-wildwood-59668.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='p-4 m-0 review-show'>
            <h4 className='my-2 text-center'>Customer Review</h4>
            <div className="card-container ">
                {reviews?.map(review => <div key={review?._id} className="mx-2 mt-5 mb-2">
                    <div className="review-card">
                        <div className="text-center">
                            <img src={review?.picture} className="rounded-circle" alt="..." />
                        </div>

                        <p className="text-center">{review?.name}</p>
                        <p className="text-center">{review?.message}</p>
                        <div className="text-center">
                            <RatingView key={review?._id} ratingValue={review?.rating} />
                        </div>

                    </div>
                </div>
                )}
            </div>






        </div>
    );
};

export default Reviews;