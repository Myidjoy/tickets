import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addValue} from '../../app/inputReducer';
import {changeStatus} from '../../app/reducer';

function ThirdBlock() {  
  const dispatch = useDispatch();
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const [on, setOn] = useState(false);
  

  const pushString = (value) => {
    setOn(false);
    const result = value === 'first'
      ? firstRef.current.value:
      value === 'second'
        ? secondRef.current.value: '';

    function pushResult() {
      if(firstRef.current.value.trim() || secondRef.current.value.trim()){       
        dispatch(changeStatus(['price', true]));      
      }else {      
        dispatch(changeStatus(['price', false]));
      }
      
      if(value === 'first'){
        dispatch(addValue([value, result]));
      }
      if(value === 'second'){
        dispatch(addValue([value, result]));
      }
      clearTimeout(pushResult);
    };
    
    clearTimeout(pushResult);
    
    setOn(true);
   
    if(on){
      setTimeout(pushResult, 500);
    }
  };
  
  return (
    <div className='third-block'>
      <div>
        <span>Цена</span>
      </div>
      <ul>
        <li>          
          <input ref={firstRef} onChange={() => {
            
            pushString('first');
          }} 
          id='first-input' type='number' placeholder='от 0'/>      
          <label htmlFor='first-input'> от</label>    
        </li>
        <li>          
          <input ref={secondRef} onChange={() => {
            pushString('second');
          }}  
          id='second-input' type='number' placeholder='до 100000000'/>          
          <label htmlFor='second-input'> до</label>
        </li>      
      </ul>
    </div>
  );
};

export default ThirdBlock;