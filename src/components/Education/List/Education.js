import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../context/UserContext.js';
import Timeline from '../../Timeline/Default/Timeline.js';

const Education = ({theme}) => {
    const {userData} = useContext(UserContext);
    const [educationElements, setEducationElements] = useState([]);
    useEffect(() => {
        if(userData["education"]){
            const localEducationElements = [];
            userData["education"].forEach((education, index) => {
                localEducationElements.push(
                    <div className='w-full mb-8' key={index}>
                        <p className={`text-left text-sm ${theme == "primary"? 'text-secondary-text' : 'text-primary'}` }>{education["date_of_start"]} - {education["date_of_completion"]}</p>
                        <p className='text-lg text-left'>{education["program"]}</p>
                        <p className={`text-left text-sm ${theme == "primary"? 'text-secondary-text' : 'text-primary'}` }>{education["institue"]}, {education["location"]}</p>
                        <p className={`text-left text-sm ${theme == "primary"? 'text-secondary-text' : 'text-primary'}`}>{education["info_text"]}</p>
                    </div>

                );
            });
            setEducationElements(localEducationElements);
        }
    }, [userData]);

    return (

        <div className='p-4 w-full'>
            <h3 className='font-semibold mb-2'>Education</h3>
            {educationElements}
        </div>
    );

}

export default Education;