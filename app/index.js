import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const USER_DATA = {
  name: 'Kevin',
  username: 'kevinccbsg',
  image: 'https://avatars3.githubusercontent.com/u/12685053?v=3&s=460'
};

const ProfilePic = (props) => {
  return (
    <img 
      src={props.image} 
      alt={`image of ${props.username}`} 
    />
  );
};

const linkStyle = {
  color: 'blue',
  cursor: 'pointer'
};

class Link extends Component {
  constructor() {
    super();
    this.changeURL = this.changeURL.bind(this);
  }

  changeURL() {
    window.location.replace(this.props.href);
  }

  render () {
    return (
      <span style={linkStyle} onClick={this.changeURL}>
        {this.props.children}
      </span>
    );
  }
};

const ProfileLink = (props) => {
  return (
    <div>
      <Link href={`https://www.github.com/${props.username}`}>
        {props.username}
      </Link>
    </div>
  );
};

const ProfileName = (props) => {
  return <h1>{props.name}</h1>;
};

const Avatar = (props) => {
  return (
    <div>
      <ProfilePic image={props.image} username={props.username} />
      <ProfileName name={props.name} />
      <ProfileLink username={props.username} />
    </div>
  );
};

ReactDOM.render(
  <Avatar
    image={USER_DATA.image}
    name={USER_DATA.name}
    username={USER_DATA.username}
  />,
  document.getElementById('app')
);