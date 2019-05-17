import React from 'react';
import Smurf from './Smurf';

const SmurfRoster = props => {
  return (
    <div>
      {props.smurfs.map((smurf) => (
        <div key={smurf.id}>
          <Smurf smurf={smurf} />
        </div>
      ))}
    </div>
  );
};

export default SmurfRoster;