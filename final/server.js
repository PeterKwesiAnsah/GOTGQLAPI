import apolloServer from 'apollo-server';
import typeDefs from './typeDefs.js';

const { ApolloServer } = apolloServer;

//create server
const server = new ApolloServer({ typeDefs });

//launch server
server.listen().then(({ url }) => {
	console.log(`Server running at ${url}`);
});
