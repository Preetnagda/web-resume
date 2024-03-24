import DefaultProject from "../components/Project/Default/Project";

import DefaultPersonalDetail from "../components/PersonalDetail/Default/PersonalDetail";

import DefaultWork from "../components/Work/Default/Work";

import DefaultEducation from "../components/Education/Default/Education";
import ListEducation from "../components/Education/List/Education" ;

import DefaultKeySkills from "../components/KeySkills/Default/KeySkills";

import DefaultResumeLayout from "../layouts/ResumeLayouts/DefaultResumeLayout";
import DetailedSidebarResumeLayout from "../layouts/ResumeLayouts/DetailedSidebarResumeLayout";


export const Layout = () => {
    //TODO: Change layout and components here, based on config variables
    return <DefaultResumeLayout
        Education={DefaultEducation}
        KeySkills={DefaultKeySkills}
        Project={DefaultProject}
        Work={DefaultWork}
        PersonalDetail={DefaultPersonalDetail}
    />
}
