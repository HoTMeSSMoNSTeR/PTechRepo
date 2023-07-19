import React from 'react';
import './index.css';


const Stars = ({ selected, onClick }) => {
  return (
    <span onClick={onClick}>
      {selected ? '★' : '☆'}
    </span>
  );
};

export default Stars;