
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
                        <div className='flex justify-between items-start'>
                            <p className='flex font-semibold items-center text-lg text-left text-primary-text'>{element["role"]}</p>
                            <div className='flex items-center gap-3 text-sm text-secondary-text shrink-0'>
                                <span className='hidden sm:inline px-2 py-0.5 rounded-full bg-accent-light text-primary-text text-xs font-medium border border-gray-200'>{element["type"]}</span>
                                <span>{element["date_of_start"]} - {element["date_of_completion"]}</span>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm text-left text-secondary-text'>{element["company"]}, {element["location"]} - {element["comapny_info"]}</p>
                        </div>
                    </div>
                ];
                return (
                    <div key={index} className='mt-4 w-full border-l-4 border-gray-200 pl-4 hover:border-primary-text transition-colors duration-200'>
                        <Accordian key={index} title={title} open={true} content={
                            <div className='space-y-4'>
                                {element['job_responsibilities'] ? <>
                                    {element['job_responsibilities'].map((responsibility, idx) =>
                                        <div key={idx} className='pb-2'>
                                            <p className='font-semibold text-primary-text flex items-center'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-primary-text mr-2 shrink-0'></span>
                                                {responsibility['title']}
                                                {responsibility['link'] && <a href={responsibility['link']} target="_blank" rel="noreferrer" className="ml-2 text-secondary-text hover:text-primary-text text-sm font-normal transition-colors"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>}
                                            </p>
                                            <p className='pl-5 text-secondary-text leading-relaxed'>{responsibility['content']}</p>
                                            <div className='pl-5'><SpanBlocks elements={responsibility['stack']} theme='secondary' /></div>
                                        </div>)}
                                </> :
                                    <p className='text-secondary-text'>{element['info_text']}</p>}
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
        const june2023 = new Date(2023, 5);
        const monthsFromJune2023 = (end.getFullYear() - june2023.getFullYear()) * 12 + (end.getMonth() - june2023.getMonth());
        return monthsFromJune2023;
    };

    return (
        <div className='p-6 w-full'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='font-semibold text-primary-text'>Work Experience</h3>
                <span className='text-sm bg-primary-text text-white px-3 py-1 rounded-full font-medium'>{parseInt((28 + calculateMonthsFromJune2023()) / 12)}+ Years</span>
            </div>
            {workElements}
        </div>
    );
}

export default Work;
