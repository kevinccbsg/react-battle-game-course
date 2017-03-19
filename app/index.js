import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const USER_DATA = {
  name: 'Kevin',
  username: 'ccbsg',
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

const ProfileLink = (props) => {
  return (
    <div>
      <a href={`https://www.github.com/${props.username}`}>
        {props.username}
      </a>
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