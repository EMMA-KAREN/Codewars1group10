import React from "react";
//create content for  specific div
const CreateElement =({hellocontent, DivTag='div',...props})=>{
return<DivTag{...props}>{hellocontent}</DivTag>;
}
export default CreateElement;