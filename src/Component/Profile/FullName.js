import React from 'react'
import '../../App.css'


const FullName=() => {
    const name=["Saadani","Mohamed Amine"];
    return (
        <h3 className="fullName">
            {name.reduce((str,elt)=>{
                return str+" "+elt;
            })}
        </h3>
    )
}
export default FullName;