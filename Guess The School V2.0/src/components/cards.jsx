import React, { useState } from 'react';

const Cards = ({ school, isFlipped, clicker }) => {
  

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={clicker}>
      <div className="card-inner">
        <div className="card-front">
          <img src={school.img} alt="school" />
        </div>
        <div className="card-back" style={{ background: school.color}}>
          <div className="card-content">
            <h3>{school.mascot}</h3>
            <h3>{school.name}</h3>
            <p>{school.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;