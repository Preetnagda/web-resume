import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext.js';
import List from '../List/List';

const ListSkills = () => {
    const {userData} = useContext(UserContext);

    return (
        <>
        {userData['listSills'] ? Object.keys(userData['listSills']).map((key, index) => {
        return(
            <div key={index} className='basis-full p-6'>
                <h3 className='font-semibold mb-3 text-primary-text'>{key}</h3>
                <List content={userData['listSills'][key]} />
            </div>
        )
        }): []}
        </>
    )
}

export default ListSkills;
