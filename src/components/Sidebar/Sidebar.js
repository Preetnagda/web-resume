import React from 'react';

const Sidebar = ({sidebarWidth, children}) => {
    return(
        <div class={`md:fixed md:${sidebarWidth} md:h-screen bg-gray-500`}>
            {children}
        </div>
    )
}

export default Sidebar;