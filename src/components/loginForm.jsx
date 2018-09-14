import React, { Component } from "react";
class LoginForm extends Component {
  username = React.createRef(); //accessing DOM
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = e => {
    e.preventDefault();
    //Call the server
    const username = this.username.current.value; //accessing DOM
  };
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              autoFocus
              ref={this.username} //accessing DOM
              id="userName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
