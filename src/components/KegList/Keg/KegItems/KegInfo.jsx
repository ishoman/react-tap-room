import React from 'react';
import PropTypes from 'prop-types';
import EditKeg from './EditKeg';
import SellPint from './SellPint';


function KegInfo(props) {
  return (
    <div>
      <div>
        <img src={props.image}></img>
      </div>
      <div>
        <h4>{props.name}</h4>
        <p>{props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>Abv: {props.abv}%</p>
        <p>Pints Remaining: {props.remainingPints}</p>
      </div>
      <div>
        <EditKeg/>
        <SellPint/>
      </div>
    </div>
  );
}

KegInfo.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  remainingPints: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default KegInfo;
