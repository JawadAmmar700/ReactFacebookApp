import React from 'react'
import './faceHome.css';
import Post from './posts';


const faceIcon = 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-128.png';
const FaceHome = (user) => {
    const username = user.user[0].name;
    const userphoto = user.user[0].photo;



    return (
        <>
            <nav>
                <img className="faceIcon" src={faceIcon} />
                <input type="text" id="find" placeholder="Search facebook" />

                <ul className="firstul">
                    <li className="home"><img id="homeIcon" src='https://cdn2.iconfinder.com/data/icons/facebook-ui-colored/48/JD-06-128.png' /></li>
                    <li><img src='https://cdn2.iconfinder.com/data/icons/facebook-43/512/1083_Friends_group_users_team-128.png' /></li>
                    <li><img src='https://cdn0.iconfinder.com/data/icons/facebook-feature-outline/32/facebook-02-128.png' /></li>
                    <li><img src='https://cdn2.iconfinder.com/data/icons/facebook-application/512/1081_Friends_group_users_team-128.png' /></li>
                    <li><img src='https://cdn2.iconfinder.com/data/icons/social-media-2380/512/game-facebook-media-internet-social-gamer-joystick-128.png' /></li>
                </ul>

                <ul className="secondul">
                    <li id="firstli">
                        <img id="user" src={userphoto} />
                        <span>{username}</span>
                    </li>
                    <li> <img src='https://cdn4.iconfinder.com/data/icons/facebook-ui-twotone/48/Paul-28-128.png' /></li>
                    <li><img src='https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Messenger-Outline-128.png' /></li>
                    <li><img src='https://cdn4.iconfinder.com/data/icons/facebook-52/512/1084_Alert_bell_notification_sound-128.png' /></li>
                    <li><img src='https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-11-128.png' /></li>
                </ul>
            </nav>
            <div className="thirdul">
                <ul>
                    <li>
                        <img id="seconduser" src={userphoto} />
                        <p>{username}</p>
                    </li>
                    <li>
                        <img id="seconduser" src={faceIcon} />
                        <p>COVID-19</p>
                    </li>
                    <li> <img id="seconduser" src={faceIcon} />
                        <p>Pages</p>
                    </li>
                    <li> <img id="seconduser" src={faceIcon} />
                        <p>Friends</p>
                    </li>
                    <li> <img id="seconduser" src={faceIcon} />
                        <p>Messenger</p>
                    </li>
                    <li>
                        <img id="seconduser" src={faceIcon} />
                        <p>Markplace</p>
                    </li>
                    <li>
                        <img id="seconduser" src={faceIcon} />
                        <p>Videos</p>
                    </li>
                    <li>
                        <img id="seconduser" src={faceIcon} />
                        <p>Moreplaces</p>
                    </li>
                </ul>
            </div>
            <Post userphoto={userphoto} username={username} />
        </>

    )
}
export default FaceHome