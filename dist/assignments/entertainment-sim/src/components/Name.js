import React, { Component } from "react";

export class Name extends Component {
  handleSubmit() {
    console.log(this.ref.name.value);
  }
  render() {
    return (
      <div>
        <h1>Please enter your name below</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" />
        </form>
      </div>
    );
  }
}

export default Name;
