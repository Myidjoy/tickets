import React from 'react';
import FirstBlock from '../firstBlock/FirstBlock';
import FourthBlock from '../fourthBlock/FourthBlock';
import SecondBlock from '../secondBlock/SecondBlock';
import ThirdBlock from '../thirdBlock/ThirdBlock';

function FixedMenu() {
  
  return (
    <section className='side__fixed-menu'>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
    </section>
  );
};

export default FixedMenu;