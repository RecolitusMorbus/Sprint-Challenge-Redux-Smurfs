import React from 'react';
import Smurf from './Smurf';

const SmurfRoster = props => {
  return (
    <div>
      {props.smurfs.map((smurf, index) => (
        <div key={index}>
          <Smurf smurf={smurf} />
        </div>
      ))}
    </div>
  );
};

export default SmurfRoster;