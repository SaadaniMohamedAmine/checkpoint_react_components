import React from 'react'


const FullName=() => {
    const name=["Saadani","Mohamed Amine"];
    return (
        <h3>
            {name.reduce((str,elt)=>{
                return str+" "+elt;
            })}
        </h3>
    )
}
export default FullName;