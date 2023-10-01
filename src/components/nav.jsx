import React from 'react';
import icon from '../../public/images/Group.png';
import '../style.css'
function nav(){
    return(
        <div className='container'>
        <img src={icon}/> 
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>           
        </div>
    )
}

export default nav;