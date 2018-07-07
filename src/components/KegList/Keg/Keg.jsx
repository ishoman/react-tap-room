import React from 'react';
import KegInfo from './KegItems/KegInfo';
import { beerList } from './../../KegList/KegList';



function Keg() {
  return (
    <div>
      <style jsx>{`
          .kegs {
            display: flex;
            width: 100%;
            justify-content: space-around;
          }
        `}
      </style>
      <div className='kegs'>
        {beerList.map((keg, index) =>
          <KegInfo
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            remainingPints={keg.remainingPints}
            image={keg.image}
            key={index}
            />
        )}
      </div>
    </div>
  );
}

export default Keg;
