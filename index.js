const express = require('express');
const app = express();

app.use(express.static( "public"))
app.get('/api/time', (req, res) => {
    const etagSent = req.headers['if-none-match'];
    console.log(etagSent)
    const time = Date.now();
    res.set('ETag', `W/"99-HDvN${time}"`)
    res.send({time: Date.now(), tag: etagSent});
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('started at port '+port));
