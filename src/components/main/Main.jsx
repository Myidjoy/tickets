import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import getFiltredArray from '../../helpers';


function Main() {
  const {tickets, oneChange, noChange, price, company} = useSelector(state => state.ticks);
  const object = useSelector(state => state.ticks);
  const {first, second} = useSelector(state => state.input);
  
  const filtredTickets = useMemo(() => {
    const keys = Object.keys(object).slice(2);
    const result = keys.reduce((acc, item) => {
      if(item === 'oneChange' && object[item]) {
        const newAcc = getFiltredArray(acc, item);
        return newAcc;
      }

      if(item === 'noChange' && object[item]) {
        const newAcc = getFiltredArray(acc, item);
        return newAcc;
      }
      
      if(item === 'price' && object[item]) {   
        
        const newAcc = getFiltredArray(acc, item, first, second);
        return newAcc;
      }
      return acc;
    }, tickets);

    return result;
  },[tickets, oneChange, noChange, price, first, second]);

  return (
    <section className='main'>
      {

        tickets.length
          ? ((filtredTickets.length && filtredTickets) || tickets).map((ticket) => (<Card            
            key={ticket.id}
            currency={ticket.flight.price.total.currencyCode}
            totalPrice={ticket.flight.price.total.amount}
            icon={ticket.flight.carrier.airlineCode}
            legs={ticket.flight.legs}          
          />)) : null
      }
    </section>
  );
};

export default memo(Main);