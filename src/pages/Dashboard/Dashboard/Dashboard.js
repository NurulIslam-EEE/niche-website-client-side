import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdninRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout, user } = useAuth();
    return (
        <div className='p-0 m-0 row dashboard'>
            <div className='d-flex justify-content-between'>
                <Link className='p-md-5 dashboard-logo' to='/'><h5 >IMPERIAL CARS</h5></Link>
                <h5 className='dashboard-logo p-md-5 '><i class="fas fa-user"></i> {user?.displayName}</h5>
                <h5 className='dashboard-logo p-md-5 '><i class="fas fa-envelope"></i> {user?.email}</h5>
            </div>


            <div className='col-md-2 dashboard-menu'>
                <ul>
                    <li>
                        <Link to={`${url}/pay`}>Pay</Link>
                    </li>
                    <li>
                        <Link to={`${url}`}>My Orders</Link>
                    </li>
                    <li>
                        <Link to={`${url}/review`}>Review</Link>
                    </li>
                    {admin?.role === 'admin' && <li>
                        <Link to={`${url}/addProduct`}>Add Product</Link>
                    </li>}
                    {admin?.role === 'admin' && <li>
                        <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                    </li>}
                    {admin?.role === 'admin' &&
                        <li>
                            <Link to={`${url}/manageProducts`}>Manage Products</Link>
                        </li>}
                    {admin?.role === 'admin' &&
                        <li>
                            <Link to={`${url}/manageOrders`}>Manage Orders</Link>
                        </li>}
                    <button onClick={logout}>Logout</button>
                </ul>

            </div>
            <div className='col-md-10' style={{ background: 'white' }}>
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                </Switch>
            </div>

        </div>
    );
};

export default Dashboard;