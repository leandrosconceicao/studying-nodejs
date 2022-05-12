class Tables {
    init(conn) {
        this.conn = conn
        this.createRegister()
    }

    createRegister() {
        const sql = `
            CREATE TABLE ATENDIMENTOS (
                id int NOT NULL AUTO INCREMENT, 
                cliente VARCHAR(50) NOT NULL, 
                pet VARCHAR(20), 
                servico VARCHAR(20) NOT NULL, 
                status VARCHAR(20) NOT NULL, 
                observacoes text, 
                PRIMARY KEY (id))
        `
        this.conn.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Tabela criada com successo')
            }
        })
    }
}

module.exports = new Tables