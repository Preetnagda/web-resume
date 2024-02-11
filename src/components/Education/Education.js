import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext.js';

const Education = () => {
    const {userData} = useContext(UserContext);
    return (
        <Accordian 
            Title = {() => {
                return (<div>
                    <h3>RMIT University, Melbourne, Australia</h3>
                    <p>20-02-2023</p>
                </div>);
            }}
            Text = {() => {
                return (<div>
                    <p>Undergoing Postgraduate studies at RMIT University Melbourne Australia</p>
                </div>);
            }}
        />
    );

}