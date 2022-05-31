import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {  changeStatus} from '../../app/reducer';

function SecondBlock() {
  const dispatch = useDispatch();
  const firstRef = useRef(null);
  const secondRef = useRef(null);  

  const helper = (val) => {    

    if(val === 'first'){        
      secondRef.current.disabled = true;
      
      dispatch(changeStatus(['oneChange', true]));       
    }
    if(val === 'second'){      
      firstRef.current.disabled = true;      
      
      dispatch(changeStatus(['noChange', true]));       
    }
    if (!secondRef.current.checked && !firstRef.current.checked){
      secondRef.current.disabled = false;
      firstRef.current.disabled = false;

      dispatch(changeStatus(['oneChange', false]));
      dispatch(changeStatus(['noChange', false])); 
    }
  };
  
  return (
    <div className='second-block'>
      <div>
        <span>Фильтровать</span>
      </div>
      <ul>
        <li>
          <input ref={firstRef} onClick={() => {                
            helper('first');                                                   
          }} 
          id='first' 
          type='checkbox'/>
          <label htmlFor='first'> - одна пересадка</label>
        </li>
        <li>
          <input ref={secondRef} onClick={() => {            
            helper('second');                     
          }} 
          id='second' 
          type='checkbox'/>
          <label htmlFor='second'> - без пересадок</label>
        </li>      
      </ul>
    </div>
  );
};

export default SecondBlock;