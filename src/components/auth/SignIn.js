import React, { Component } from 'react';
import { signIn } from "../../services/auth";
import { setUser } from "../../redux/reducers/user";
import { connect } from "react-redux";

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: {
        username: '',
        password: ''
      },
      error: null,
      isLoading: false,
    };
  }

  handleInputChange = (event) => {
    this.setState((state) => ({
      model: {
        ...state.model,
        [event.target.name]: event.target.value
      }
    }))
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { history, dispatch } = this.props;
    const { model } = this.state;

    this.setState({ error: null, isLoading: true });

    signIn(model)
      .then((res) => {
        dispatch(setUser({ username: model.username, player: res.data.player }));
        history.push('/');
      })
      .catch(res => {
        this.setState({ error: res.response?.data?.error, isLoading: false });
      });
  };

  render() {

    return (
      <div className="login">
        <div className="ui grid centered">
          <form onSubmit={this.handleSubmit}>
            <div className="fields">
              <div className="required field">
                <div className="ui icon input">
                  <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange}/>
                  <i className="user icon"> </i>
                </div>
              </div>
              <div className="required field">
                <div className="ui icon input">
                  <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
                  <i className="lock icon"> </i>
                </div>
              </div>
              <div className="error">
                {this.state.error}
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

export default connect()(SignIn);
