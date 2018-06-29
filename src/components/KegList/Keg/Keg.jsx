import React from 'react';
import EditKeg from './KegItems/EditKeg';
import KegInfo from './KegItems/KegInfo';
import SellPint from './KegItems/SellPint';
import { beerList } from './../../KegList/KegList';


function Keg() {
  return (
    <div>
      {beerList.map((keg, index) =>
        <KegInfo
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          remainingPints={keg.remainingPints}
          key={index}
          />
      )}
      <SellPint/>
      <EditKeg/>
    </div>
  );
}

export default Keg;
