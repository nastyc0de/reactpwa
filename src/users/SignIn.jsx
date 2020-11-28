import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, signIn } from '../store';

const SignIn = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    console.log(user);

    const handleSignIn = () => {
        dispatch(
            signIn({
                email:'admin@gmail.com',
                jwtToken:'12121dcsdcdscg'
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
                user ? <button onClick={handleLogOut}>Cerrar Sesion</button>
                     :
                        <button onClick={handleSignIn}>Ingresar</button>
            }
        </div>
    )
}

export default SignIn
