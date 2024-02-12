import Sidebar from '../../components/Sidebar/Sidebar';
import PersonalDetail from '../../components/PersonalDetail/Default/PersonalDetail.js';
import KeySkills from '../../components/KeySkills/Default/KeySkills.js';
import Education from '../../components/Education/Default/Education.js';
import Work from '../../components/Work/Default/Work.js';

const DefaultResumeLayout = () => {
    const sidebarWidth = "w-64";
    return(
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-64 shrink-0">
                <Sidebar sidebarWidth={sidebarWidth}>
                    <div className="md:h-1/6"></div>
                    <PersonalDetail className="w-full"/>
                    <div className='text-white absolute hidden md:block right-2.5 bottom-2.5'>
                    </div>
                </Sidebar>
            </div>
            <div className="md:flex-grow" style={{height: '200vh'}}>
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
            </div>
        </div>
    );
}

export default DefaultResumeLayout;