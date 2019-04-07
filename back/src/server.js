const express = require('express');
const app = express();

const PORT = process.env.port || 5001;
const tableStore = require('./TableStorage/TableStorage')

app.use(express.static('public'));

app.get('/table', (req, res) => {
    const table = tableStore.getTable();
    res.send(table);
});

app.listen(PORT, () => {
    console.log(`Serve on http://localhost:${PORT}`)
});
