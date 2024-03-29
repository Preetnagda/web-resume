import Sidebar from '../../components/Sidebar/Sidebar';
import ListSkills from "../../components/ListSkills/ListSkills.js";
import Socials from '../../components/Socials/Socials.js';

const DefaultResumeLayout = ({PersonalDetail, KeySkills, Education, Work, Project, Footer}) => {
    const sidebarWidth = "w-64";
    return(
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-64 shrink-0">
                <Sidebar sidebarWidth={sidebarWidth}>
                    <div className="md:h-1/6"></div>
                    <PersonalDetail hasSocial={true} className="py-4 w-full"/>
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
                <div className='md:flex flex-col lg:flex-row text-left'>
                    <Work />
                </div>
                <div className='md:flex flex-col lg:flex-row text-left'>
                    <Project />
                </div>
                <div className='md:flex flex-col lg:flex-row text-left'>
                    <ListSkills />
                </div>
                <div class="my-4 md:hidden">
                </div>
            </div>
        </div>
    );
}

export default DefaultResumeLayout;