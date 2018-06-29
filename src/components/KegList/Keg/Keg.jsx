import React from 'react';
import EditKeg from './KegItems/EditKeg';
import KegInfo from './KegItems/KegInfo';
import KegImage from './KegItems/KegImage';
import SellPint from './KegItems/SellPint';


function Keg() {
  return (
    <div>
      <KegImage/>
      <KegInfo/>
      <SellPint/>
      <EditKeg/>
    </div>
  );
}

export default Keg;
