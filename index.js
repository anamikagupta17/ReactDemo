import React from 'react';
import ReactDOM from 'react-dom'; // reactdom is used for render
//import ana from "./app"; // for element
// import Anamika from "./app";  // for component
// import Student from "./student";  // for function component
// import Compose from "./composing";
//import New from "./new";
import Main from './main'
import Unmount from './unmount'

//let ana=<h1> Hello Anamika!</h1>;

//ReactDOM.render(ana, document.getElementById('root')); // for element

//ReactDOM.render(<Anamika />, document.getElementById('root'));
//ReactDOM.render(<Student  name=" Annu" />, document.getElementById('root'));
//ReactDOM.render(<Compose />, document.getElementById('root'));

//ReactDOM.render(<New    name="Anamika"/>, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));
ReactDOM.render(<Unmount />, document.getElementById('ana'));
//ReactDOM.unmountComponentAtNode(document.getElementById('root'));