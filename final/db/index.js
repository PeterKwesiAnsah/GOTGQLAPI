import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

const adapter = new FileSync('characters.json');

const model = low(adapter);

//export a se of clean understandle custom functions

//export database model
export default {
	getAll: () => model.getState().characters,
	findById: (characterID) =>
		model.get('characters').find({ id: characterID }).value(),
};
