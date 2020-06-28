import React from 'react';
import EmpCard from '../components/EmpCard';
import empArray from '../array';

function ManagerF() {
    
    if (empArray === null) {
        return(
            <div></div>
        )
    }

    else {
        const manArray = empArray.filter(function(e) {
            return e.title === 'Manager'
        })
           const empComponents = manArray.map(person => <EmpCard emp={person}/>)
    
        return(
            <div>
                {empComponents}
            </div>
        
        )
    }
    
}

export default ManagerF;