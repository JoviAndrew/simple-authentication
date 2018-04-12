const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

const indexRouter = require('./routers/index');

app.get('/', indexRouter);

app.listen(3000, () => {
    console.log('listen to port 3000')
})