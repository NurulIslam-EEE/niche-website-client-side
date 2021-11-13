import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    console.log(user?.email)
    if (loading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;