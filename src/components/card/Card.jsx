import React from 'react';
import Button from '../UI/Button';
import CardLine from './CardLine';

const dayOfWeek = ['вс','пн','вт','ср','чт','пт','сб'];
const month = ['янв.','фев.','мар.','апр.','май.','июн.','июл.','авг.','сен.','окт.','ноя.','дек.'];

function Card({
  totalPrice, 
  currency,
  icon,
  legs  
}) {
  
  const  [forward, back] = legs;
  
  const getFlyInfo = (currentItem, direction, directionFly) => {
    const getCity = (target) => {
      if(direction === 'departure') {
        if(target === 'city') {
          try {
            return directionFly.segments[currentItem].departureCity.caption;
          } catch(error) {
            // log(error);
            
            return 'Error';
          }         
        }
        if(target === 'airport') {
          
          return directionFly.segments[currentItem].departureAirport.caption;
        }
        if(target === 'id') {
          
          return directionFly.segments[currentItem].departureAirport.uid;
        }
      }
      if (direction === 'arrival') {
        if(target === 'city') {
          try {
            return directionFly.segments[currentItem].arrivalCity.caption;
          } catch(error) {
            // log(error);
            
            return 'Error';
          }          
        }
        if(target === 'airport') {
          
          return directionFly.segments[currentItem].arrivalAirport.caption;
        }
        if(target === 'id') {
          
          return directionFly.segments[currentItem].arrivalAirport.uid;
        }
      }
      return null;
    };
    
    return (
      <span>{getCity('city')} ,<span> {getCity('airport')} </span><span className='color'> {getCity('id')}</span></span>
    );
  };
  const getTime = (time) => {
    const newTime = time.toString().split('').reverse();
    
    newTime.unshift(' мин ');
    newTime.splice(3, 0, ' ч ');
    
    return newTime.reverse().join('');
  };
  const departureDateBack = new Date(back.segments[0].departureDate);
  const arrivalDateBack = back.segments > 1 
    ? new Date(back.segments[back.segments.length - 1].arrivalDate): 
    new Date(back.segments[0].arrivalDate);

  const departureDate = new Date(forward.segments[0].departureDate);
  const arrivalDate = forward.segments > 1 
    ? new Date(forward.segments[forward.segments.length - 1].arrivalDate): 
    new Date(forward.segments[0].arrivalDate);

  const timeLeft = `${departureDate.getUTCHours()}:${departureDate.getUTCMinutes()} ${departureDate.getDay()} ${month.filter((_,i) => i === departureDate.getMonth())} ${dayOfWeek.filter((_,i) => i === departureDate.getDay())}`;
  const timeRight = `${arrivalDate.getDay()} ${month.filter((_,i) => i === arrivalDate.getMonth())} ${dayOfWeek.filter((_,i) => i === arrivalDate.getDay())} ${arrivalDate.getUTCHours()}:${arrivalDate.getUTCMinutes()}`;
  
  const timeLeftBack = `${departureDateBack.getUTCHours()}:${departureDateBack.getUTCMinutes()} ${departureDateBack.getDay()} ${month.filter((_,i) => i === departureDateBack.getMonth())} ${dayOfWeek.filter((_,i) => i === departureDateBack.getDay())}`;
  const timeRightBack = `${arrivalDateBack.getDay()} ${month.filter((_,i) => i === arrivalDateBack.getMonth())} ${dayOfWeek.filter((_,i) => i === arrivalDateBack.getDay())} ${arrivalDateBack.getUTCHours()}:${arrivalDateBack.getUTCMinutes()}`;
  return (
    <section className='card'>
      <header className='card__header'>
        <div className='card__icon'><span>{icon}</span></div>
        <div>
          <div className='card__total-price'><span className='price'>{totalPrice} {currency}</span></div>
          <p className='text'>Стоимость для одного взрослого пассажира</p>
        </div>
      </header>
      <main className='card__main'>
        <section className='forward'>
          <section className='card__airport-info'>
            <span>{
              getFlyInfo(0, 'departure', forward)
            }</span>
            <span className='color'> &#10230; </span>
            <span>{
              forward.segments.length > 1
                ? getFlyInfo(forward.segments.length - 1, 'arrival', forward): getFlyInfo(0, 'arrival', forward)
            }</span>
          </section>
          <section className='card__time-info'>
            <span>{timeLeft}</span>
            <span>{getTime(forward.duration)}</span>
            <span>{timeRight}</span>
          </section>
          <CardLine change={forward.segments.length}/>
          <section className='card__carrier'>
            <span>Рейст выполняет: </span><span>{forward.segments[0].airline.caption}</span>
          </section>
        </section>
        <section className='back'> 
          <section className='card__airport-info'>
            <span>{
              getFlyInfo(0, 'departure', back)
            }</span>
            <span className='color'> &#10230; </span>
            <span>{
              forward.segments.length > 1
                ? getFlyInfo(back.segments.length - 1, 'arrival', back): getFlyInfo(0, 'arrival', back)
            }</span>
          </section>
          <section className='card__time-info'>
            <span>{timeLeftBack}</span>
            <span>{getTime(back.duration)}</span>
            <span>{timeRightBack}</span>
          </section>
          <CardLine change={back.segments.length}/>
          <section className='card__carrier'>
            <span>Рейст выполняет: </span><span>{back.segments[0].airline.caption}</span>
          </section>
        </section>
        
      </main>
      <footer>
        <Button/>
      </footer>
    </section>
  );
};

export default Card;