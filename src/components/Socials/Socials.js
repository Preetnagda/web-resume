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
                localSocials.push(<SocialIcon key={index} className={`w-8 ${theme == "primary"? '' :'fa-inverse'}`} social={social}></SocialIcon>)
            });
            setSocials(localSocials);
        }
    }, [userData]);

    return <>{socials}</>
}


export default Socials;