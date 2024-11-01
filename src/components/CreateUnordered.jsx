import React from "react";

//create a list
const CreateUnordered=({list})=>{
return(
  <ul>
    {
list.map((item, index)=>(

<li key={index}>{item}</li>
))}
  </ul>
)
}
export default CreateUnordered;