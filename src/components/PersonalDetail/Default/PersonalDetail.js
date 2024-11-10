import React, {useContext, useState, useEffect} from 'react';
import Image from "../../Image/Image.js";
import { UserContext } from '../../../context/UserContext.js';
import Socials from '../../Socials/Socials.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocation, faLocationArrow, faLocationPin, faMapLocation, faMapLocationDot, faMapPin } from '@fortawesome/free-solid-svg-icons';
import userImage from "../../../images/profile.jpeg";

const PersonalDetail = ({className, hasSocial}) => {
    const {userData} = useContext(UserContext);

    return(<div className={className}>
        <Image
            src={userImage}
            className={"w-32 rounded-full m-auto"}
        />
        <div className="py-4">
            <h1 className='text-white'>{userData.name}</h1>
            <p className='text-white text-lg'>{userData.bio}</p>
            <p className='text-white pt-4'><FontAwesomeIcon icon={faHouse} size="sm"/>&nbsp; {userData.location}</p>

        </div>
        {hasSocial? 
        <div>
            <Socials />
        </div>
        :[]}
    </div>);
}

export default PersonalDetail;