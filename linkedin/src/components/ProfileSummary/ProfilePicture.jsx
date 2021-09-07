import React from "react"
import "./ProfilePicture.css";

const ProfilePicture = (props) =>  
        <div>
                <img
                id="profileImage"
                src={props.img}
                />
        </div>

export default ProfilePicture;