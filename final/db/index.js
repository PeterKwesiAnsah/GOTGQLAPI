import low from 'lowdb'
import {FileSync} from 'lowdb/adapters'
 
const adapter = new FileSync('db.json')
const db = low(adapter)