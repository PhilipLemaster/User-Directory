import React from 'react';
import EmpCard from '../components/EmpCard';
import empArray from '../array';

function EngineerF() {

    if (empArray === null) {
        return(
            <div></div>
        )
    }

    else {
        const engArray = empArray.filter(function(e) {
            return e.title === 'Engineer'
        })
           const empComponents = engArray.map(person => <EmpCard emp={person}/>)
    
        return(
            <div>
                {empComponents}
            </div>
        
        )
    }
    
}

export default EngineerF;