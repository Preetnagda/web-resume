import React from 'react';

const Sidebar = ({sidebarWidth, children}) => {
    return(
        <div className={`md:fixed md:w-72 md:h-screen bg-secondary bg-gradient-to-b from-secondary to-slate-900`}>
            {children}
        </div>
    )
}

export default Sidebar;
