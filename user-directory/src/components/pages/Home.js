import React from 'react';
import EmpCard from '../EmpCard';
import empArray from '../../array';

function Home() {
    if (empArray === null || empArray === undefined) {
        return(
            <div></div>
        )
    }
    else {
        const empComponents = empArray.map(person => <EmpCard emp={person}/>)
        return(
            <div>
                {empComponents}
            </div>
            
        )
    }
    
}

export default Home;