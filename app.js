const express = require('express')
const app = express()
const path = require('path')

let port = process.argv[3]
if(!port){
    port = 3000
}

let rootDir =  process.argv[2]
if(!rootDir){
    rootDir = __dirname
}

app.use(express.static(rootDir))
app.listen(port,()=>{
    console.log(`Static server running on '${port}'`)
    console.log(`Serving content from '${rootDir}'`)
})
