
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-wildwood-59668.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
    }, []);
    return (
        <div>
            <Navigation></Navigation>
            <div className='m-0 row'>
                <h2 className='text-center'>Available Cars</h2>
                {
                    moreProducts?.map(service => <div className="p-0 m-0 col-md-4">

                        <Card className='m-3' style={{ width: '93%' }}>
                            <Card.Img variant="top" src={service?.image} />
                            <Card.Body>
                                <Card.Title>{service?.name}</Card.Title>
                                <Card.Text>
                                    <p>AED {service?.price}</p>

                                    <p> {service?.description.slice(0, 150)}...</p>
                                </Card.Text>
                                <Link to={`/booking/${service?._id}`}><Button className='service-btn'>Buy</Button></Link>

                            </Card.Body>
                        </Card>
                    </div >)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MoreProducts;