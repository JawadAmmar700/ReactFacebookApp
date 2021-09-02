import React, { useContext, useEffect, useReducer, useState } from 'react';
import './login.css';
import { auth, provider } from './firebase';
import FaceHome from './faceHome';



const facebookIcon = 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-128.png';


const Login = () => {
    const [user, setUser] = useState('');



    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then((result) => {
                const profile = { name: result.user.displayName, photo: result.user.photoURL }
                setUser([...user, profile]);


            })
            .catch((error) => alert(error.message));


    }


    return (

        <>
            {user ? <FaceHome user={user} /> : <>

                <img className="facebookIcon" src={facebookIcon} />
                <h3>Facebook</h3>
                <button className="loginbutton" onClick={signIn}>Login</button>


            </>
            }

        </>


    )

}


export default Login;