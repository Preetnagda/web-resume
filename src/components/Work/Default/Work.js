
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/UserContext.js';
import Accordian from '../../Accordian/Accordian.js';
import SpanBlocks from "../../SpanBlocks/SpanBlocks.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Work = () => {

    const { userData } = useContext(UserContext);
    const [workElements, setWorkElements] = useState([]);

    useEffect(() => {
        let localWorkElements = [];
        if (userData["work"]) {
            localWorkElements = userData["work"].map((element, index) => {
                let title = [
                    <div key="title" className='flex-grow'>
                        <div className='flex justify-between'>
                            <p className='flex font-semibold items-center text-lg text-left w-2/5'>{element["role"]}</p>
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
                return (
                    <div key={index} className='mt-6 w-full border-b'>
                        <Accordian key={index} title={title} open={index == 0 ? true : false} content={
                            <div>
                                {element['job_responsibilities'] ? <>
                                    {element['job_responsibilities'].map((responsibility, idx) =>
                                        <div key={idx}>
                                            <p className='font-bold flex items-center'>• {responsibility['title']}
                                                {responsibility['link'] && <a href={responsibility['link']} target="_blank" className="ml-2 text-sm font-normal"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>}
                                            </p>
                                            <p className='pl-3'>{responsibility['content']}</p>
                                            <p className='pl-3'><SpanBlocks elements={responsibility['stack']} theme='secondary' /></p>
                                        </div>)}
                                </> :
                                    element['info_text']}
                            </div>
                        } />
                    </div>
                );
            });

            setWorkElements(localWorkElements);
        }
    }, [userData]);

    const calculateMonthsFromJune2023 = () => {
        const end = new Date();
        const june2023 = new Date(2023, 5); // June is month 5 in JavaScript Date (0-indexed)
        const monthsFromJune2023 = (end.getFullYear() - june2023.getFullYear()) * 12 + (end.getMonth() - june2023.getMonth());
        return monthsFromJune2023;
    };

    return (
        <div className='p-4 w-full'>
            <div className='flex justify-between'>
                <h3 className='font-semibold mb-2'>Work Experience</h3>
                <span>{parseInt((28 + calculateMonthsFromJune2023()) / 12)}+ Years</span>
            </div>
            {workElements}
        </div>
    );
}

export default Work;