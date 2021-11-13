import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const ManageProducts = () => {
    const [manageProduct, setManageProduct] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(false);
    useEffect(() => {
        fetch('https://cryptic-wildwood-59668.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [deleteProduct]);

    const handleProductDelete = (id) => {
        const confirmation = window.confirm('Are you sure ? want to delete');
        if (confirmation) {
            fetch(`https://cryptic-wildwood-59668.herokuapp.com/manageProducts/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setDeleteProduct(!deleteProduct);
                        alert('deleted successfully')
                    }
                })
        } else {

        }


    }
    return (
        <div className='m-0 row'>
            <h2>Manage products</h2>
            {
                manageProduct?.map(service => <div key={service?._id} className="col-md-4">

                    <Card style={{ width: '95%', margin: '15px 0' }}>
                        <Card.Img variant="top" src={service?.image} />
                        <Card.Body>
                            <Card.Title>{service?.name}</Card.Title>
                            <Card.Text>
                                <p>AED {service?.price}</p>
                            </Card.Text>
                            <button className='manage-btn' onClick={() => handleProductDelete(service?._id)}>Delete</button>

                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;