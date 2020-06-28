import React from 'react';
import empArray from '../array';
import EmpCard from '../components/EmpCard';

function Alpha() {

    let empArray = JSON.parse(localStorage.getItem("employees"));
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

export default Alpha;