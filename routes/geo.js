
const router = require('express').Router();
const axios = require('axios');
const cors = require('cors');

router.use(cors());

/* GET home page. */
router.get('/', async function (req, res, next) {
    // https://api.ipgeolocation.io/ipgeo?apiKey=cd6d9b2cc9a94dcbbbc891c56d26e49c&ip=
    // let remote = req.socket.remoteAddress;
    let remote = "206.167.123.9";
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=cd6d9b2cc9a94dcbbbc891c56d26e49c&ip=${remote}`;
    let fetch = await axios.get(url);

    let lat = fetch.data.latitude;
    let lng = fetch.data.longitude;
    // console.log(fetch.data);
    res.json({ lat: lat, lng: lng });
});



module.exports = router;
