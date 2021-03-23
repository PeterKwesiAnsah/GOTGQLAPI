import apolloServer from 'apollo-server';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js'

const { ApolloServer } = apolloServer;

//create server
const server = new ApolloServer({ typeDefs });

//launch server
server.listen().then(({ url }) => {
	console.log(`Server running at ${url}`);
});
