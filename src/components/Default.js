import React, { Component } from "react";

class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Error 404 : Page Not Found</h3>
        <p>
          The Requested URL : <strong>{this.props.location.pathname} </strong>
          was not found
        </p>
      </div>
    );
  }
}

export default Default;
