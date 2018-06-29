import React from 'react';
import Keg from './Keg/Keg';

const beerList = [
  {
    name: 'Czech Pils',
    brand: 'Buoy',
    price: 5,
    abv: 6.2,
    remainingPints: 122
  },
  {
    name: 'Pils',
    brand: 'Heater Allen',
    price: 5,
    abv: 5.2,
    remainingPints: 122
  },
  {
    name: 'Gimme Mo',
    brand: 'Crux',
    price: 5,
    abv: 6.2,
    remainingPints: 122
  },
  {
    name: 'Oatmeal Pale Ale',
    brand: 'Burnside Brewing',
    price: 8,
    abv: 5.6,
    remainingPints: 122,
  }
];

function KegList() {
  return (
    <div>
      <Keg/>
    </div>
  );
}

export { beerList };
export default KegList;
