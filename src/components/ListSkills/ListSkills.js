import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext.js';
import List from '../List/List';

const ListSkills = () => {
    const {userData} = useContext(UserContext);

    return (
        <>
        {userData['listSills'] ? Object.keys(userData['listSills']).map((key, index) => {
        return(
            <div className='basis-full p-4'>
                <h3 className='font-semibold mb-2'>{key}</h3>
                <List content={userData['listSills'][key]} />
            </div>
        )
        }): []}
        </>
    )
}

export default ListSkills;