import axios from 'axios';

const signIn = body => axios.post('/login', body);

const signOut = username => axios.post('/logout', { username });


export {
  signIn,
  signOut,
};

