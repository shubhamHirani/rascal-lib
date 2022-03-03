const express = require('express')
const publishRouter = require('./router/publish-router')
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/publish', publishRouter)


app.listen(port, ()=>{
    console.log('app is running on port '+port);
})