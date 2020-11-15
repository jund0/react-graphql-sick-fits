// this file connects to the remote prisma DB and gives us the ability to query it with JSSer

const { Prisma } = require('prisma-binding');
console.log(process.env);
console.log('DB.JS');
console.log('endpoint');
console.log(process.env.PRISMA_ENDPOINT);
console.log('secret ');
console.log(process.env.PRISMA_SECRET);
const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;