import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.png';

const NotFound = () => {
    return (
        <div className='p-5 text-center'>
            <div>
                <img className='img-fluid' src={error} alt="" />
                <h1>Page Not Found!</h1>
                <Link to='/'> <button className='px-5 py-1 m-3 bg-info'>Back to home</button> </Link>
            </div>

        </div>
    );
};

export default NotFound;