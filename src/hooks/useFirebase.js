import { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeFirebase()
const useFirebase = () => {
    const [services, setServices] = useState([]);
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState({});

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    //create user
    const createUser = (email, password, name, location, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name };
                setUser(newUser);
                const destination = location?.state?.from || '/';
                history.replace(destination);

                updateUser(name);
                //save user in db
                saveUser(email, name, 'POST');

            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setLoading(false))

    }
    //login
    const loginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.email, user)
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);

            })
            .catch((error) => {
                setError('Please register first');
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }
    //google sign in
    const signInWithGoogle = (location, history) => {
        setLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setError('')
                //update user in db
                saveUser(user?.email, user?.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                console.log(user)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribe;
    }, [auth])

    const updateUser = (name) => {

        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {

            }).catch((error) => {

            });
    }
    //save user in db
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://cryptic-wildwood-59668.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    }
    //load user to identify admin
    useEffect(() => {

        fetch(`https://cryptic-wildwood-59668.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                console.log('admin', data)

            })
            .catch(error => {

            })


    }, [user?.email])

    const logout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))
    }

    return {
        createUser,
        signInWithGoogle,
        logout,
        user,
        loginUser,
        error,
        loading,
        updateUser,
        admin,
        services,
        setServices
    };
};

export default useFirebase;