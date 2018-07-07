import React from 'react';
import PropTypes from 'prop-types';



function KegInfo(props) {
  return (
    <div className="keg-container">
      <style jsx>{`
          .keg-container{
            display: flex;
            width: 200px;
            flex-direction: column;
            border: 2px solid black;
          }
          h4 {
            text-align: center;
          }
          p {
            position: relative;
            left: 20px;
          }
          `}
      </style>
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
