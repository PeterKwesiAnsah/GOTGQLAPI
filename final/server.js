import apolloServer from 'apollo-server';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const { ApolloServer } = apolloServer;

//create server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true
});

//launch server
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
