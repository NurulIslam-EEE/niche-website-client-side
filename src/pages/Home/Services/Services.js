import React, { useEffect } from 'react';
import Service from '../Service.js/Service';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Services = () => {
    // const [services, setServices] = useState([]);
    const { services, setServices } = useAuth();

    useEffect(() => {
        fetch('https://cryptic-wildwood-59668.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='m-0 row'>
            <h2 className='mt-4 text-center'>Our Collection</h2>
            {
                services?.slice(0, 6).map(service => <Service key={service?._id} service={service}></Service>)
            }

            <Link className='text-center' to='/moreProducts'><button className='more-btn'>Explore More</button></Link>
        </div>
    );
};

export default Services;