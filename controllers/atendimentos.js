module.exports = app => {
    app.get('/', (req, res) => res.send('Servidor rodando, tudo ok.'))
}