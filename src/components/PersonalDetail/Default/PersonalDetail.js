import React, {useContext, useState, useEffect} from 'react';
import Image from "../../Image/Image.js";
import { UserContext } from '../../../context/UserContext.js';
import SocialIcon from '../../SocialIcon/SocialIcon.js';

const PersonalDetail = ({className}) => {
    const {userData} = useContext(UserContext);
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        let localSocials = [];
        if(userData["social"]){
            Object.keys(userData["social"]).forEach(social => {
                localSocials.push(<SocialIcon className={"w-8 fa-inverse"} social={social}></SocialIcon>)
            });
            setSocials(localSocials);
        }
    }, [userData]);

    return(<div className={className}>
        <Image
            src={userData.profileImage}
            className={"w-32 rounded-full m-auto"}
        />
        <div className="py-4">
            <h1 className='text-white'>{userData.name}</h1>
            <p className='text-white'>{userData.bio}</p>
        </div>
        <div>
            {socials}
        </div>
    </div>);
}

export default PersonalDetail;