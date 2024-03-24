import Sidebar from '../../components/Sidebar/Sidebar.js';
import PersonalDetail from '../../components/PersonalDetail/Default/PersonalDetail.js';
import KeySkills from '../../components/KeySkills/Default/KeySkills.js';
import Education from '../../components/Education/List/Education.js';
import Work from '../../components/Work/Default/Work.js';
import Project from '../../components/Project/Default/Project.js';
import ListSkills from "../../components/ListSkills/ListSkills.js";
import Socials from '../../components/Socials/Socials.js';

const DetailedSidebarResumeLayout = () => {
    const sidebarWidth = "w-64";
    return(
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-64 shrink-0">
                <Sidebar sidebarWidth={sidebarWidth}>
                    {/* <div className="md:h-1/6"></div> */}
                    <PersonalDetail className="py-4 w-full"/>
                    <div className='text-white absolute hidden md:block right-2.5 bottom-2.5'>
                        <Socials/>
                    </div>
                    <div className='text-white text-left'>
                        <Education />
                    </div>

                </Sidebar>
            </div>
            <div className="md:flex-grow">
                <div className='md:flex flex-col lg:flex-row text-left'>
                    <div className='basis-full'>
                        <KeySkills />
                    </div>
                    <div className='basis-full'>
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

            </div>
        </div>
    );
}

export default DetailedSidebarResumeLayout;