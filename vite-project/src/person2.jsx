import React from 'react';

class Person2 extends React.Component {
  render() {
    return (
      <div>
        <span>Hello {this.props.name}</span>
        <span>{this.props.surname}</span>
        <span>{this.props.age}</span>
      </div>
    );
  }
}

export default Person2;