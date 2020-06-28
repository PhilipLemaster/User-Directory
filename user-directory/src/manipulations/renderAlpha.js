import React from 'react';
import empArray from '../array';
import EmpCard from '../components/EmpCard';

function Alpha() {

    empArray.sort(function(a, b){
        var nameA=a.fullName.toLowerCase(), nameB=b.fullName.toLowerCase();
        if (nameA < nameB) //sort string ascending
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; //default return value (no sorting)
       });

    return(

        <EmpCard emp={empArray}/>

    )
}

export default Alpha;