const path = require('path')
const express = require('express')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3800
const app = express()

app.use(express.static(publicPath))

app.listen(3800, () => {
    console.log(`Server is up on ${port}`);
})
