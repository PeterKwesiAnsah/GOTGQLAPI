
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

const adapter = new FileSync('characters.json');

const model = low(adapter);

//export database model
export default model;
