import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisValue]=useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setisValue(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setisValue(false)
      
      return 
    }
    props.onAddGoal(enteredValue);
  };
 
 
// // console.log(<Button></Button>)
//making blure
let buttonStyle={backgroundColor:"#8b005d"}
if(isValid===false){
  buttonStyle={filter:"blur(2px)" }
}
  


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: isValid===false ? "red":"black"}}>Course Goal</label>
        <input type="text" style={{
        backgroundColor:isValid===false? "rgba(225, 67, 28, 0.81)":"white",
        borderColor:isValid===false?"black":" #ccc"}} 
      
        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" filter={buttonStyle}  >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
