import React from 'react';
import Keg from './Keg/Keg';

const beerList = [
  {
    name: 'Patrick A',
    description: 'Naja G',
    price: 'Beautiful glove',
    abv: 'Beautiful glove',
    remainingPints: 'https://venmopics.appspot.com/u/v1/m/0f0cab35-c81f-47f6-89f2-29362bcdddbb'
  },
  {
    name: 'Mike C',
    description: 'Robbie N',
    price: 'Security deposit',
    abv: 'Security deposit',
    remainingPints: 'https://venmopics.appspot.com/u/v1/n/293f994a-9068-4fcc-9cc5-2ee02b38e9d3'
  },
  {
    name: 'Blake H',
    description: 'Solomiya S',
    price: 'Book cover',
    abv: 'Book cover',
    remainingPints: 'https://venmopics.appspot.com/u/v2/n/7384a31b-4832-4fd6-aa34-c0e79fac86f8'
  },
  {
    name: 'Brendan A',
    description: 'Alex M',
    price: 'Electric',
    abv: 'Electric',
    remainingPints: 122,
  },
  {
    name: 'Ansley R',
    description: 'Ryland L',
    price: 'Dinner',
    abv: 'Dinner',
    remainingPints: 122
  },
  {
    name: 'Kelsey C',
    description: 'Dana D',
    price: 'Lunch',
    abv: 'Lunch',
    remainingPints: 122
  },
  {
  name: 'Kara Q',
  description: 'Calvin W',
  price: 'Booze',
  abv: 'Booze',
  remainingPints: 122
  }
];

function KegList() {
  return (
    <div>
      <Keg/>
    </div>
  );
}

export default KegList;
