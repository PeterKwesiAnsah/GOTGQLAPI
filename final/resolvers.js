//importing our characters data model
import model from './db/index.js';

//creating resolvers
const resolvers = {
	Query: {
		//resolving getCharaters query field
		getCharacters: () => model.getAll(),
		getCharacterById: (_, { characterID }) => {
			return model.findById(characterID);
		},
		getRandomCharacter: () => {
			//get random IDs between 1 and 26
			const randomID = Math.floor(Math.random() * 26 + 1);

			return model.findById(randomID);
		},

		searchCharByName: (_, { queryString }) => model.filter(queryString),
	},
};

//exporting resolvers
export default resolvers;
