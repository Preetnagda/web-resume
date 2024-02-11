import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserContext } from '../../context/UserContext.js';
import { faGithub, faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkedinSocialIcon = ({userData, className}) => {
    return <a href={userData.social?.linkedin}><FontAwesomeIcon className={className} icon={faLinkedinIn}/></a>
}

const GithubSocialIcon = ({userData, className}) => {
    return <a href={userData.social?.github}><FontAwesomeIcon className={className} icon={faGithub}/></a>
}
const XSocialIcon = ({userData, className}) => {
    return <a href={userData.social?.x}><FontAwesomeIcon className={className} icon={faXTwitter}/></a>
}
const EmailSocialIcon = ({userData, className}) => {
    return <a href={"mailto:" + userData.social?.email}><FontAwesomeIcon className={className} icon={faEnvelope}/></a>
}

const SocialEnum = {
    "linkedin": LinkedinSocialIcon,
    "github": GithubSocialIcon,
    "x": XSocialIcon,
    "email": EmailSocialIcon
}

const SocialIcon = ({social, className}) => {
    const {userData} = useContext(UserContext);
    const Icon = SocialEnum[social]
    return (
        <Icon userData={userData} className={className}/>
    )
}

export default SocialIcon;