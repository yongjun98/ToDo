const exress = require('express');
const router = express.Router();
const db = require('./config/db');

router.get('/login', (req, res) => {
    res.send({data : 'data'})
});

module.exports = router;