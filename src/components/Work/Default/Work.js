import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../context/UserContext.js';
import ListContent from "../../ListContent/Default/ListContent.js";
import Accordian from '../../Accordian/Accordian.js';

const Work = () => {

    const {userData} = useContext(UserContext);
    const [workElements, setWorkElements] = useState([]);

    useEffect(() => {
        let localWorkElements = [];
        if(userData["work"]){
            localWorkElements = userData["work"].map((element, index) => {
                let title = [
                    <div key="title" className='flex-grow'>
                        <div className='flex justify-between'>
                            <p className='flex items-center text-lg text-left w-2/5'>{element["role"]}</p>
                            <p className='flex justify-end items-center text-sm text-secondary-text w-1/5'>{element["type"]}</p>
                            <p className='flex flex-col sm:flex-row items-center justify-end text-sm text-secondary-text w-2/5'>
                                <span>{element["date_of_start"]}&nbsp;</span>
                                <span>-&nbsp;</span>
                                <span>{element["date_of_completion"]}</span></p>
                        </div>
                        <div>
                            <p className='text-base text-left text-secondary-text'>{element["company"]}, {element["location"]} - {element["comapny_info"]}</p>
                        </div>
                    </div>
                ];
                return(
                    <div key={index} className=''>
                        <Accordian key={index} title={title} content={element["info_text"]} />
                    </div>
                );
            });

            setWorkElements(localWorkElements);
        }
    }, [userData]);

    return(
        <div className='p-4 w-full'>
            <h3 className='font-semibold mb-2'>Work Experience</h3>
            {workElements}
        </div>
    );
}

export default Work;