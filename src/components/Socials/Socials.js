import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext.js';
import SocialIcon from '../SocialIcon/SocialIcon.js';


const Socials = ({theme}) => {
    const {userData} = useContext(UserContext);
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        let localSocials = [];
        if(userData["social"]){
            Object.keys(userData["social"]).forEach((social, index) => {
                localSocials.push(<SocialIcon key={index} className={`w-5 ${theme == "primary"? '' :'fa-inverse'}`} social={social}></SocialIcon>)
            });
            setSocials(localSocials);
        }
    }, [userData]);

    return <div className='flex gap-3 justify-center'>{socials}</div>
}


export default Socials;
