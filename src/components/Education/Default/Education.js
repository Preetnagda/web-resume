import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../context/UserContext.js';
import Timeline from '../../Timeline/Default/Timeline.js';

const Education = () => {
    const {userData} = useContext(UserContext);
    const [educationElements, setEducationElements] = useState([]);
    useEffect(() => {
        if(userData["education"]){
            const localEducationElements = [];
            userData["education"].forEach((education, index) => {
                localEducationElements.push(
                    <div className='flex justify-between w-full' key={index}>
                        <div>
                            <p className='text-base text-left font-semibold text-primary-text'>{education["program"]}</p>
                            <p className='text-left text-sm text-secondary-text'>{education["institue"]}, {education["location"]}</p>
                            <p className='text-left text-sm text-primary-text font-medium'>{education["info_text"]}</p>
                        </div>
                        <div className='min-w-[5rem] text-right'>
                            <p className='text-sm text-secondary-text'>{education["date_of_start"]}</p>
                            <p className='text-xs text-secondary-text'>to</p>
                            <p className='text-sm text-secondary-text'>{education["date_of_completion"]}</p>
                        </div>
                    </div>

                );
            });
            setEducationElements(localEducationElements);
        }
    }, [userData]);

    return (

        <div className='p-6 w-full'>
            <h3 className='font-semibold mb-3 text-primary-text'>Education</h3>
            <Timeline elements={educationElements}/>
        </div>
    );

}

export default Education;
