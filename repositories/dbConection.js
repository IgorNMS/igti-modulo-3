import pg from "pg";
const postGresConnect = process.env.CONNECTION_STRING;

async function connect() {
    if(global.connection){
        return global.connection.connect();
    }
    const pool = new pg.Pool({
       connectionString: postGresConnect
    });
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}