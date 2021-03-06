import apolloServer from 'apollo-server';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const { ApolloServer } = apolloServer;

//create server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

//launch server
server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
