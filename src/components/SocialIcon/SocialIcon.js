import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserContext } from '../../context/UserContext.js';
import { faGithub, faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const defaultContainerClass = 'inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 transition-colors duration-200';

const LinkedinSocialIcon = ({userData, className, containerClassName}) => {
    return <a href={userData.social?.linkedin} target='_blank' className={containerClassName || defaultContainerClass}><FontAwesomeIcon className={className} icon={faLinkedinIn}/></a>
}

const GithubSocialIcon = ({userData, className, containerClassName}) => {
    return <a href={userData.social?.github} target='_blank' className={containerClassName || defaultContainerClass}><FontAwesomeIcon className={className} icon={faGithub}/></a>
}
const XSocialIcon = ({userData, className, containerClassName}) => {
    return <a href={userData.social?.x} target='_blank' className={containerClassName || defaultContainerClass}><FontAwesomeIcon className={className} icon={faXTwitter}/></a>
}
const EmailSocialIcon = ({userData, className, containerClassName}) => {
    return <a href={"mailto:" + userData.social?.email} target='_blank' className={containerClassName || defaultContainerClass}><FontAwesomeIcon className={className} icon={faEnvelope}/></a>
}

const SocialEnum = {
    "linkedin": LinkedinSocialIcon,
    "github": GithubSocialIcon,
    "x": XSocialIcon,
    "email": EmailSocialIcon
}

const SocialIcon = ({social, className, containerClassName}) => {
    const {userData} = useContext(UserContext);
    const Icon = SocialEnum[social]
    return (
        <Icon userData={userData} className={className} containerClassName={containerClassName}/>
    )
}

export default SocialIcon;
