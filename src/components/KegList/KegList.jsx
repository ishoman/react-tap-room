import React from 'react';
import Keg from './Keg/Keg';


const beerList = [
  {
    name: 'Czech Pils',
    brand: 'Buoy',
    price: 5,
    abv: 6.2,
    remainingPints: 122,
    image: 'Buoy'
  },
  {
    name: 'Pils',
    brand: 'Heater Allen',
    price: 5,
    abv: 5.2,
    remainingPints: 122,
    image: 'Heater'
  },
  {
    name: 'Gimme Mo',
    brand: 'Crux',
    price: 5,
    abv: 6.2,
    remainingPints: 122,
    image: 'Crux'
  },
  {
    name: 'Oatmeal Pale Ale',
    brand: 'Burnside Brewing',
    price: 8,
    abv: 5.6,
    remainingPints: 122,
    image: 'Burnside'
  }
];

function KegList() {
  return (
    <div className='keg-list'>
      <style jsx>{`
          .keg-list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
          }
        `}

      </style>
      <Keg/>
    </div>
  );
}

export { beerList };
export default KegList;
