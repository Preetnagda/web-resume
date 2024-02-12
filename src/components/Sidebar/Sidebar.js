import React from 'react';

const Sidebar = ({sidebarWidth, children}) => {
    return(
        <div className={`md:fixed md:w-64 md:h-screen bg-secondary`}>
            {children}
        </div>
    )
}

export default Sidebar;