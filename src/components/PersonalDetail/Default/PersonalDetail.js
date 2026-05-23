import React, {useContext} from 'react';
import Image from "../../Image/Image.js";
import { UserContext } from '../../../context/UserContext.js';
import Socials from '../../Socials/Socials.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import userImage from "../../../images/profile.jpeg";

const PersonalDetail = ({className, hasSocial}) => {
    const {userData} = useContext(UserContext);

    return(<div className={className}>
        <div className="ring-4 ring-white/20 rounded-full w-36 h-36 mx-auto overflow-hidden">
            <Image
                src={userImage}
                className={"w-36 h-36 object-cover"}
            />
        </div>
        <div className="py-4">
            <h1 className='text-white'>{userData.name}</h1>
            <p className='text-gray-300 text-lg font-medium'>{userData.bio}</p>
            <p className='text-gray-400 pt-2 text-sm'><FontAwesomeIcon icon={faHouse} size="sm"/>&nbsp; {userData.location}</p>
        </div>
        {hasSocial?
        <div className='pt-2'>
            <Socials />
        </div>
        :[]}
    </div>);
}

export default PersonalDetail;
