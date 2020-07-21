import React from 'react';
import { arrayOf, string } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


let htmlData = arr => {
  return arr.map(i => <h6 key={uuidv4()}>{i}</h6>);
};

const NavBar = ({ list }) => {
  return (
    <>
      {htmlData(list)}
    </>
  );
};

NavBar.propTypes = {
  list: arrayOf(string)
};


export default NavBar;
