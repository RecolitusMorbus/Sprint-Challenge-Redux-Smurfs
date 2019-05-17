import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import SmurfRoster from './SmurfRoster';
import ProcessSmurf from './ProcessSmurf';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  };

  addSmurf = smurf => {
    this.props.addSmurf(smurf);
  };
  
  render() {
    return (
      <div>
        <h1>Smurf Security Village 292 Roster</h1>
        <h6>Your Protection, Ensured</h6>
        <div>
          {this.props.fetchingSmurfs ? (
            <p>Protectees Inbound for Processing</p>
          ) : (
            <SmurfRoster smurfs = {this.props.smurfs} />
          )}
        </div>
        <div>
          <span>Process New Protectee to Smurf Security Village 292?</span>
          <br/>
            <ProcessSmurf addSmurf={this.props.addSmurf} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
