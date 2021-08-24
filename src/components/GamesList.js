import React, { Component } from 'react';
import { signOut } from "../services/auth";
import { removeUser } from "../redux/reducers/user";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getCategories, getGamesList } from "../services/games";

class GamesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      games: [],
      categories: [],
      selectedCategoryId: 0,
      searchName: '',
    }

  }

  componentDidMount() {
    getGamesList()
      .then(response => {
        this.setState({ games: response.data })
      })
      .catch((e) => console.log('Error retrieving games', e))

    getCategories()
      .then(response => {
        this.setState({ categories: response.data })
      })
      .catch((e) => console.log('Error retrieving categories', e))
  }

  logOut = () => {
    const { history, dispatch, user: { username } } = this.props;

    signOut(username).then(() => {
      history.push('/sign-in');
      dispatch(removeUser());
    })
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  };

  render() {
    const { user: { player } } = this.props;
    const { games, categories, selectedCategoryId, searchName } = this.state;

    const filteredGames = games
      .filter((game) => !selectedCategoryId || game?.categoryIds?.includes(selectedCategoryId)) // filter by category
      .filter((game) => !searchName || game?.name?.toLowerCase().includes(searchName.toLowerCase()))

    return (
      <div className="casino">
        <div className="ui grid centered">
          <div className="twelve wide column">
            <div className="ui list">

              {/* <!-- player item template -->*/}
              <div className="player item">
                <img className="ui avatar image" src={window.location.origin + '/' + player?.avatar} alt="avatar"/>

                <div className="content">
                  <div className="header"><b className="name">{player?.name}</b></div>
                  <div className="description event">{player?.event}</div>
                </div>
              </div>
              {/* <!-- end player item template -->*/}

            </div>
            <div className="logout ui left floated secondary button inverted" onClick={this.logOut}>
              <i className="left chevron icon"></i>Log Out
            </div>
          </div>
          <div className="four wide column">
            <div className="search ui small icon input ">
              <input type="text" placeholder="Search Game" onChange={(e) => this.handleChange('searchName', e.target.value)}/>
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <h3 className="ui dividing header">Games</h3>

            <div className="ui relaxed divided game items links">

              {/* <!-- game item template -->*/}

              {filteredGames.map(game => {
                return (
                  <div className="game item" key={game?.code}>
                    <div className="ui small image">
                      <img src={game?.icon} alt="game-icon"/>
                    </div>
                    <div className="content">
                      <div className="header"><b className="name">{game?.name}</b></div>
                      <div className="description">
                        {game?.description}
                      </div>
                      <div className="extra">
                        <div className="play ui right floated secondary button inverted">
                          Play
                          <i className="right chevron icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* <!-- end game item template -->*/}

            </div>
          </div>
          <div className="four wide column">
            <h3 className="ui dividing header">Categories</h3>

            <div className="ui selection animated list category items">

              {/* <!-- category item template -->*/}
              {categories.map(category =>
                <div className="category item" key={category?.id}>
                  <div className="content">
                    <div className="header" onClick={() => this.handleChange('selectedCategoryId', category?.id)}>
                      { selectedCategoryId === category?.id ? `>${category?.name}<`  : category?.name }
                    </div>
                  </div>
                </div>
              )}

              {/* <!-- end category item template -->*/}

            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};
export default compose(
  withRouter,
  connect(mapStateToProps)
)(GamesList);
