import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext.js';
import SpanBlocks from "../../SpanBlocks/SpanBlocks.js";

const KeySkills = () => {
    const {userData} = useContext(UserContext);
    return(
        <div className='p-6'>
            <h3 className="font-semibold mb-3 text-primary-text">Key Skills</h3>
            <SpanBlocks elements={userData["keySkills"]} />
        </div>
    );
}

export default KeySkills;
