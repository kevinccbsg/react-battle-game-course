import React, { Component } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import gitHubHelpers from '../utils/gitHubHelpers';

class ConfirmBattleContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentDidMount() {
    let query = this.props.location.query;
    // fetch info from github
    gitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(data => {
      console.log(data);
      this.setState({
        isLoading: false,
        playersInfo: [1, 2]
      });
    })
  }

  render () {
    return (
      <div>
        <ConfirmBattle 
          isLoading={this.state.isLoading} 
          playersInfo={this.state.playersInfo}
        />
      </div>
    );
  }
}

export default ConfirmBattleContainer;