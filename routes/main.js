__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/doc', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/doc/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/doc/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'SagiriBot',
            namaowner: 'Rdt404',
            instagram: 'rdtyaptralvrtha',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
