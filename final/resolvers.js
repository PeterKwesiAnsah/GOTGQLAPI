//importing our characters data model
import model from './db/index.js';



//creating resolvers

const resolvers = {
	Query: {
		//resolving getCharaters query field
		getCharacters: () => model.get('characters').value(),
	},
};

//exporting resolvers
export default resolvers;
