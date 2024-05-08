const http = require('http')

const server = http.createServer((req,res)=>{
    // res.write('Welcome to our home page')
    // res.end()

    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is the about section')
    }
    res.end(`
    <h1>Oops</h1>
    <p>We cannot seem to find the page you r looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)