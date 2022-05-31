import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {upAction, downAction, timeAction} from '../../app/reducer';

function FirstBlock() {
  
  const upRef = useRef();
  const downRef = useRef();
  const timeRef = useRef();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(upAction());
    upRef.current.checked = true;
  },[]);

  return (
    <div className='first-block'>
      <div>
        <span>Сортировка</span>
      </div>
      <ul>
        <li>
          <input onClick={() => {
            downRef.current.checked = false;
            timeRef.current.checked = false;
            dispatch(upAction());
          }} ref={upRef} readOnly  type='radio'/>
          <span> - по возрастанию цены</span>
        </li>
        <li>
          <input onClick={() => {
            upRef.current.checked = false;
            timeRef.current.checked = false;
            dispatch(downAction());
          }} ref={downRef} readOnly type='radio'/>
          <span> - по убыванию цены</span>
        </li>
        <li>
          <input onClick={() => {
            upRef.current.checked = false;
            downRef.current.checked = false;
            dispatch(timeAction());
          }} ref={timeRef} readOnly type='radio'/>
          <span> - по времени в пути</span>
        </li>
      </ul>
    </div>
  );
};

export default FirstBlock;