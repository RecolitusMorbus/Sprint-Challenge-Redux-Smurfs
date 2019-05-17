import react from 'react';

const Smurf = ({ smurf }) => (
    <div>
        <p>
            <strong>Name:</strong> {" "} {smurf.name}
            <br/>
            <strong>Age:</strong> {" "} {smurf.age}
            <br/>
            <strong>Height:</strong> {" "} {smurf.height}
        </p>
    </div>
);

export default Smurf;