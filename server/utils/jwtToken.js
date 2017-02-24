import jwt from 'jsonwebtoken';
/* import { getUser } from '../data/database';*/

const signJWT = ({ id }) => {
  // Accepts an id and creates a signed token
  const secret = process.env.JWT_SECRET || 'topsecret';
  // sync https://github.com/auth0/node-jsonwebtoken/issues/111
  return jwt.sign({ id }, secret, { expiresIn: '7d' });
};

const getJWT = (/* { username, password }*/) => {
  /* const user = getUser(1);*/
  const jwtToken = signJWT(1);
  return jwtToken;
};

export default getJWT;
