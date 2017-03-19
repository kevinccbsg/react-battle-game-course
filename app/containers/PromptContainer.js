import React, { Component } from 'react';
import Prompt from '../components/Prompt';


class PromptContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
    this.updateValue = this.updateValue.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  submitUser(e) {
    e.preventDefault();
    this.setState({ username: '' });

    if (this.props.routeParams.playerOne) {
      this.props.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    }
    else {
      this.props.router.push(`/playerTwo/${this.state.username}`);
    }
  }

  updateValue(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <Prompt 
          submitUser={this.submitUser}
          header={this.props.route.header}
          username={this.state.username}
          updateValue={this.updateValue}
        />
      </div>
    );
  }
}

export default PromptContainer;