import React from "react";
import ReactDom from "react-dom/client"
import Codewarriors from "./Codewarriors";

function All()
{
 const element=createElement('Hello world!');
 const list=createUnordered(['apples','bananas','oranges'])
 return (
  <div>
    <div className="card">
    {element}
    {list}
    </div>

 
    <div class="one-div">
      <div class="text"> <Codewarriors/></div>
    </div>

  </div>
  
 )
}

function createElement(content, tag='div', property={}){
  return (
    React.createElement(tag, property , content)
    )
  
}

function createUnordered(list){
  return React.createElement(
    'ul',
    {},
      list.map((item, index)=>(
        React.createElement ('li', { key: index }, item)
      ))
  )
}

export default All;
