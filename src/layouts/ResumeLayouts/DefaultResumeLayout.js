import Sidebar from '../../components/Sidebar/Sidebar';
import ListSkills from "../../components/ListSkills/ListSkills.js";
import Socials from '../../components/Socials/Socials.js';

const DefaultResumeLayout = ({PersonalDetail, KeySkills, Education, Work, Project, Footer}) => {
    const sidebarWidth = "w-72";
    return(
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-72 shrink-0">
                <Sidebar sidebarWidth={sidebarWidth}>
                    <div className="md:h-[8%]"></div>
                    <PersonalDetail hasSocial={true} className="py-4 px-6 w-full"/>
                    <div className='text-white absolute hidden md:block right-2.5 bottom-2.5'>
                    </div>
                </Sidebar>
            </div>
            <div className="md:flex-grow">
                <div className='md:flex flex-col lg:flex-row text-left'>
                    <div className='basis-full'>
                        <KeySkills />
                    </div>
                    <div className='basis-full'>
                        <Education />
                    </div>
                </div>
                <div className='text-left bg-surface'>
                    <Work />
                </div>
                <div className='text-left'>
                    <Project />
                </div>
                <div className='md:flex flex-col lg:flex-row text-left bg-surface'>
                    <ListSkills />
                </div>
            </div>
        </div>
    );
}

export default DefaultResumeLayout;
