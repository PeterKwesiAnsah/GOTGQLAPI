import low from 'lowdb';
import FileSync  from 'lowdb/adapters/FileAsync.js';

const adapter = new FileSync('characters.json');
const db = low(adapter);

//export database
export default db;
   