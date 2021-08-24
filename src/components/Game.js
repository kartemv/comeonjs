import React, { Component } from 'react';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = { }

  }

  goBack = () => {
    this.props.history.push('/');
  };

  render() {

    return (
        <div className="ingame">
          <div className="ui grid centered">
            <div className="three wide column">
              <div className="ui right floated secondary button inverted" onClick={this.goBack}>
                <i className="left chevron icon"></i>Back
              </div>
            </div>
            <div className="ten wide column">
              <div id="game-launch">
              </div>
            </div>
            <div className="three wide column"></div>
          </div>
        </div>
    );
  }
}

export default Game;
