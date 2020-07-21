import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const arrParse = (arr) => {
  return arr.map(i => <h4 key={uuidv4()}>{i}</h4>);
};
