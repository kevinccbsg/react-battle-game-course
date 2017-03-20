import axios from 'axios';

let client_id = '';
let client_secret = '';
let param = `?client_id=${client_id}&client_secret=${client_secret}`;

function getUserInfo (username) {
  //return axios.get(`https://api.github.com/users/${username}${param}`);
  return axios.get(`https://swapi.co/api/people/1/`);
}

let helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(username => {
      return getUserInfo(username)
    }));
  }
};

export default helpers;