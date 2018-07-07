import React from 'react';


function Header() {
  return(
    <div>
      <style jsx>{`
          div {
            background-color: lightgray;
          }
          h3 {
            position: relative;
            left: 50px;
          }
            `}

      </style>
      <h1>Welcome to Tapp'd</h1>
      <h3>Voted Portland's newest pub!</h3>
    </div>
  );
}

export default Header;
