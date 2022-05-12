const customExpress = require('./config/customExpress.js')

const conn = require('./infra/connection.js')
const Tables = require('./infra/tables.js')

conn.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Conectado com sucesso')
        Tables.init(conn)
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})