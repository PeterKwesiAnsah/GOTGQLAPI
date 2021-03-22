import low from 'lowdb'
import {FileSync} from 'lowdb/adapters'
 
const adapter = new FileSync('characters.json')
const db = low(adapter)

e