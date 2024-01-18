const express = require('express')
const app = express()

const port = 3444

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))


app.get('/',(req,res)=>{
    res.render('index')
})

// app.get('/main.css',(req,res)=>{
//     res.type('text/css')
//     res.sendFile(css/main.css)
// })

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})
