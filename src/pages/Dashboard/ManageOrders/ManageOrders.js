import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(false);

    const handleStatus = (id) => {
        fetch(`https://cryptic-wildwood-59668.herokuapp.com/manageOrders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setDeleteOrder(!deleteOrder);
                console.log(data)
            })

    }
    const handleOrderDelete = (id) => {
        const confirmation = window.confirm('Are you sure? want to delete');
        if (confirmation) {
            fetch(`https://cryptic-wildwood-59668.herokuapp.com/myOrders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        setDeleteOrder(!deleteOrder);
                    }
                })
        } else {

        }

    }
    useEffect(() => {
        fetch('https://cryptic-wildwood-59668.herokuapp.com/manageOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [deleteOrder])

    return (
        <div>
            <h2 className='my-2 text-center'>Manage orders</h2>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Order Details</th>
                        <th scope="col">Manage</th>

                    </tr>
                </thead>
                <tbody className='w-100'>
                    {
                        manageOrders?.map((order, index) => <tr key={order?._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{order?.name}</td>
                            <td>
                                <p> Address:{order?.address}</p>
                                <p> Status:{order?.status}</p>
                            </td>
                            <td>
                                <button className='my-2 manage-btn' onClick={() => handleOrderDelete(order?._id)}>Delete</button>
                                <br />  <button className='manage-btn' onClick={() => handleStatus(order?._id)}>Approve</button>

                            </td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;