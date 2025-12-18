const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Coffee Shop api is running');
});
// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/order', require('./routes/order'));
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
});