import React from 'react';
import EmpCard from '../components/EmpCard';

function ManagerF() {

    let empArray = JSON.parse(localStorage.getItem("employees"));
    const manArray = empArray.filter(function(e) {
        return e.title == 'Manager'
    })
       const empComponents = manArray.map(person => <EmpCard emp={person}/>)

    return(
        <div>
            {empComponents}
        </div>
    
    )
}

export default ManagerF;