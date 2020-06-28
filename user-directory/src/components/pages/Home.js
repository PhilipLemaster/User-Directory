import React from 'react';
import EmpCard from '../EmpCard';

function Home() {
    let empArray = JSON.parse(localStorage.getItem("employees"));
    const empComponents = empArray.map(person => <EmpCard emp={person}/>)
    return(
        <div>
            {empComponents}
        </div>
        
    )
}

export default Home;