import React, { Component } from 'react';

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = { };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {

    return (
        <div className="login">
          <div className="ui grid centered">
            <form onSubmit={this.handleSubmit}>
              <div className="fields">
                <div className="required field">
                  <div className="ui icon input">
                    <input type="text" name="username" placeholder="Username"/>
                      <i className="user icon"> </i>
                  </div>
                </div>
                <div className="required field">
                  <div className="ui icon input">
                    <input type="password" name="password" placeholder="Password"/>
                      <i className="lock icon"> </i>
                  </div>
                </div>
                <div className="field">
                  <div className="ui icon input">
                    <input type="submit" value="Login"/>
                      <i className="right chevron icon"> </i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default SignIn;
