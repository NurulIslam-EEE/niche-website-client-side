import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, price, image, _id } = service;

    return (
        <div className="my-3 col-md-4">

            <Card style={{ width: '90%', margin: '5%' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>AED {price}</p>
                        <p> {description.slice(0, 150)}...</p>

                    </Card.Text>
                    <Link to={`/booking/${_id}`}><Button className='service-btn'>Buy</Button></Link>

                </Card.Body>
            </Card>
        </div >
    );
};

export default Service;