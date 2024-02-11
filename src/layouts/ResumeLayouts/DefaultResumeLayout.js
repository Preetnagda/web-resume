import Sidebar from '../../components/Sidebar/Sidebar';
import PersonalDetail from '../../components/PersonalDetail/Default/PersonalDetail.js';

const DefaultResumeLayout = () => {
    const sidebarWidth = "w-64";
    return(
        <div className="flex flex-col md:flex-row">
            <div className={`md:${sidebarWidth}`}>
                <Sidebar sidebarWidth={sidebarWidth}>
                    <div class="md:h-1/6"></div>
                    <PersonalDetail className="w-full"/>
                    <div className='text-white absolute hidden md:block right-2.5 bottom-2.5'>
                    </div>
                </Sidebar>
            </div>
            <div className="md:flex-grow" style={{height: '200vh'}}>
        
            </div>
        </div>
    );
}

export default DefaultResumeLayout;