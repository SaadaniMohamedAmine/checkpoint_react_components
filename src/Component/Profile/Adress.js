import React from 'react';
import '../../App.css'

const Address =()=> {
     let Address=["Avenue Ibn-Khaldoun","Beni Hassen",5014,"Monastir","Tunisie" ];
     return (
         <h4 className="Address">
         {
             Address.join(" ")
         }
         </h4>
     )
}
export default Address;