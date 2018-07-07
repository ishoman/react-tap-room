import KegList from './KegList/KegList';
import React from 'react';




function Welcome(){
  return (
    <div>
      <style>{`
          display: flex;
          max-width: 100%;
        `}
      </style>
      <KegList/>
    </div>

  );

}

export default Welcome;
