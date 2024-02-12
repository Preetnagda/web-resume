import React, {useContext} from 'react';
import { UserContext } from '../../../context/UserContext.js';
import SpanBlocks from "../../SpanBlocks/SpanBlocks.js";

const KeySkills = () => {
    const {userData} = useContext(UserContext);
    return(
        <div className='p-4'>
            <h3 className="font-semibold mb-2">Key Skills</h3>
            <SpanBlocks elements={userData["keySkills"]} />
        </div>
    );
}

export default KeySkills;