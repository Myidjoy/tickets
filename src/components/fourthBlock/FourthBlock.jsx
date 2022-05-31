import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

function FourthBlock() {
  const {tickets} = useSelector(state => state.ticks);
  
  const reef = useRef();
  
  const carrier = tickets.reduce((acc, item) => {
    if(!(item.flight.carrier.uid in acc)) {
      acc[item.flight.carrier.uid] = {
        airlineCode: item.flight.carrier.airlineCode,
        caption: item.flight.carrier.caption
      };

      return acc;
    } 
    return acc;
    
  }, {});
  
  const arrayFromCarrier = useMemo(() => Object.entries(carrier), []);
  
  return (
    <div className='fourth-block'>
      <div>
        <span>Авиакомпании</span>
      </div>
      <ul ref={reef}>
        {
          arrayFromCarrier.map((item) => (
            <li key={item[0]}>
              <input id={item[0]} type='checkbox'/>
              <label htmlFor={item[0]}> - {item[1].caption}</label> 
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default FourthBlock;