import React from 'react';
import Keg from './Keg/Keg';
import Buoy from './../../assets/images/buoy.jpg';
import Burnside from './../../assets/images/burnsidebrewing.jpg';
import Crux from './../../assets/images/crux.jpg';
import Heater from './../../assets/images/heaterallen.png';

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
    <div>
      <Keg/>
    </div>
  );
}

export { beerList };
export default KegList;
