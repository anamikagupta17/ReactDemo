import React from "react";

// function Student()
// {
//     return <h1>Hello Anamika,this is Function Component</h1>;
// }
// const Student = () =>{
//     return <h1>Hello Anamika,this is Function Component by<br/> new method of JSX</h1>;
// };

const Student = (props) =>{
    return <h1>Hello Anamika,this is Function Component by<br/> new method of JSX {props.name}</h1>;
};
export default Student;