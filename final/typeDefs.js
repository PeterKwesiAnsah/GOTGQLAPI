import graphql from 'apollo-server';
const { gql } = graphql;

//creating  type Definations for the server
const typeDefs = gql`
	type Character {
		id: Int!
		name: String!
		birthDate: String!
		appearances: String!
		status: Status!
		potrayedBy: String!
		photoUrl: String!
	}

	type Query {
		getCharacters: [Character!]
		getCharacterById: Character!
		getRandomCharacter: Character!
		getCharByString: Character
	}

	enum Status {
		ALIVE
		DECEASED
	}
`;

export default typeDefs;