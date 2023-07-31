// Tive que colocar para o lint ignorar esse erro de importação, porque a dependência está só no container, 
// e a cor vermelha no arquivo enquanto eu codava estava me incomodando bastante kkkk
// eslint-disable-next-line import/no-unresolved
const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const config = {
  algorithm: 'HS256',
};

const createToken = (data) => JWT.sign(data, secret, config);

module.exports = {
  createToken,
};