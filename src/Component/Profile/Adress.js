import React from 'react';

const Address =()=> {
     let Address=["Avenue Ibn-Khaldoun","Beni Hassen",5014,"Monastir","Tunisie" ];
     return (
         <h4>
         {
             Address.join(" ")
         }
         </h4>
     )
}
export default Address;