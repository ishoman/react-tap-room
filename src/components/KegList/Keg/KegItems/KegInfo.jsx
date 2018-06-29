import React from 'react';
import PropTypes from 'prop-types';


function KegInfo(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.abv}</p>
      <p>{props.remainingPints}</p>
    </div>
  );
}

KegInfo.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  remainingPints: PropTypes.number.isRequired,
};

export default KegInfo;
