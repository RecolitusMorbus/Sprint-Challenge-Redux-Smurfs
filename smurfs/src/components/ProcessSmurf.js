import React from 'react';

export default class ProcessSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      });
      this.setState({
        name: '',
        age: '',
        height: ''
      });
      window.location.reload();
    };
  };

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    };
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={this.state.height}
          onChange={this.changeHandler}
        />
        <button type="submit">Process Protectee</button>
      </form>
    );
  }
}