const {Client} = require('pg')
const dbconnection = new Client({
    user: 'yourusername',
    password: 'yourpassword',
    database:'yourdatabasename',
    host: 'localhost',
    port: 5432,
})
async function connectDatabase(){
    await dbconnection.connect()
    console.log('Connection establish succesfully')
}
async function disconnectDatabase(){
    await dbconnection.end()
    console.log('Connection closed')
}
async function runQuery(query) {
    await dbconnection.query(query)
    console.log('Query Executed Succesfully')

}
module exports = {connectDatabase, disconnectDatabase, runQuery}



