// api.js
import axios from 'axios';

const proxyUrl = 'https://api.allorigins.win/raw?url=';

export const fetchPublicServerData = () => {
  const PublicServer = 'https://webdowncheck.api.akuari.my.id/api?url=itsreezky.my.id';
  return axios.get(proxyUrl + PublicServer);
};

export const fetchPrivateServerData = () => {
  const PrivateServer = 'https://webdowncheck.api.akuari.my.id/api?url=server.itsreezky.my.id';
  return axios.get(proxyUrl + PrivateServer);
};

export const fetchToolsServerData = () => {
  const ToolsServer = 'https://webdowncheck.api.akuari.my.id/api?url=tools.itsreezky.my.id';
  return axios.get(proxyUrl + ToolsServer);
};
