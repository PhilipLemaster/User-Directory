import React from 'react';
import EmpCard from '../components/EmpCard';
import empArray from '../array';

function InternF() {

    if (empArray === null) {
        return(
            <div></div>
        )
    }
    
    else {
        const intArray = empArray.filter(function(e) {
            return e.title === 'Intern'
        })
           const empComponents = intArray.map(person => <EmpCard emp={person}/>)
    
        return(
            <div>
                {empComponents}
            </div>
        
        )
    }
    
}

export default InternF;