import React from 'react';
import EditKeg from './KegItems/EditKeg';
import KegInfo from './KegItems/KegInfo';

import SellPint from './KegItems/SellPint';


function Keg() {
  return (
    <div>
      <KegInfo/>
      <SellPint/>
      <EditKeg/>
    </div>
  );
}

export default Keg;
