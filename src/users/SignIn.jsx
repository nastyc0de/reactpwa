import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, signUp } from '../store/user';

const SignIn = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    console.log(user);

    const handleSignIn = () => {
        dispatch(
            signUp({
                credentials:{
                    email:'admin@gmail.com',
                    jwtToken:'12121dcsdcdscg'
                }
            })
        )
    }
    const handleLogOut = () => {
        dispatch(
            logOut()
        )
    }
    return (
        <div>
            {
                user 
                ? 
                <button onClick={handleSignIn}>Ingresar</button>
                :
                <button onClick={handleLogOut}>Cerrar Sesion</button>
            }
        </div>
    )
}

export default SignIn
