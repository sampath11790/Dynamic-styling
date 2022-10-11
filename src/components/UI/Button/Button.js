import React,{useState} from 'react';


import './Button.css';


const Button = props => {
 
  // setButtonState(false)
  // console.log(props)
  return (
    <button type={props.type} style={props.filter}className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
