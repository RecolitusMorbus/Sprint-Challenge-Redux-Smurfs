import React from 'react';

const Smurf = ({ smurf }) => (
  <p>
    <strong>Name:</strong> {" "} {smurf.name}
    <br/>
    <strong>Age:</strong> {" "} {smurf.age}
    <br/>
    <strong>Height:</strong> {" "} {smurf.height}
  </p>
);

export default Smurf;