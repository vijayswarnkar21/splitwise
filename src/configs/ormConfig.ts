import { BetterSqlite3ConnectionOptions } from "typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions"

const config : BetterSqlite3ConnectionOptions = {
    type: 'better-sqlite3',
    database: 'db',
    entities: ['dist/repos/*.repo.js'],
    synchronize: true
}

export default config