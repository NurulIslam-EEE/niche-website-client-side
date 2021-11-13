import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { admin } = useAuth();
    console.log(admin)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin?.role === 'admin' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;