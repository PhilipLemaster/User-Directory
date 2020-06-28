import React from 'react';
import EmpCard from '../components/EmpCard';
import empArray from '../array';

function Alpha() {

    if (empArray === null) {
        return(
            <div></div>
        )
    }

    else {
        const alphaArray = empArray.sort(function(a, b){
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
           const empComponents = alphaArray.map(person => <EmpCard emp={person}/>)
    
        return(
            <div>
                {empComponents}
            </div>
        
        )
    }
    
}

export default Alpha;