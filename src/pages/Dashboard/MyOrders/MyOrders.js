import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([])
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        fetch(`https://cryptic-wildwood-59668.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user?.email, deleted]);

    const handleOrderCancel = (id) => {
        const confirmation = window.confirm('Are you sure ? want to delete');
        if (confirmation) {
            fetch(`https://cryptic-wildwood-59668.herokuapp.com/myOrders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeleted(!deleted)
                    }

                });
        }

    }

    return (


        <div className='p-0 m-0 row'>
            <h2>My order</h2>
            {
                myOrder?.map(order => <div key={order?._id} className="col-md-4">

                    <Card style={{ width: '90%' }}>
                        <Card.Img variant="top" src={order?.image} />
                        <Card.Body>
                            <Card.Title>{order?.name}</Card.Title>
                            <Card.Text>
                                {order?.status}
                            </Card.Text>

                            <button onClick={() => handleOrderCancel(order?._id)}>Cancel</button>
                        </Card.Body>
                    </Card>
                </div >)
            }

        </div >

    );
};

export default MyOrders;