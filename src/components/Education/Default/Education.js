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
                            <p className='text-lg text-left'>{education["program"]}</p>
                            <p className='text-left text-sm text-secondary'>{education["institue"]}, {education["location"]}</p>
                            <p className='text-left text-sm text-secondary'>{education["info_text"]}</p>
                        </div>
                        <div className='min-w-[4rem]'>
                            <p className='text-left text-sm text-secondary'>{education["date_of_start"]}</p>
                            <p className='text-center text-xs text-secondary'>to</p>
                            <p className='text-left text-sm text-secondary'>{education["date_of_completion"]}</p>
                        </div>
                    </div>

                );
            });
            setEducationElements(localEducationElements);
        }
    }, [userData]);

    return (

        <div className='p-4 w-full'>
            <h3 className='font-semibold mb-2'>Education</h3>
            <Timeline elements={educationElements}/>
        </div>
    );

}

export default Education;