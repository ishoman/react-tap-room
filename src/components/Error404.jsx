import React from 'react';
import { Link } from 'react-router-dom';
import test from './../assets/images/test.jpg';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <img src={test}/>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
