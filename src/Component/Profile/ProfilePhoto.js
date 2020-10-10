import React from 'react' 
import img from './profile.jpg'
import '../../App.css'

 const ProfilePhoto=() => {
    return (
        <div className="img">
            <img src={img}  alt="myPic"/>
        </div>
    )
}
export default ProfilePhoto ;