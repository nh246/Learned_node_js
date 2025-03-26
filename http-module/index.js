import http from 'http'

const server = http.createServer( (req , res) => {
  
    res.writeHead(200 , {'Content-Type' : 'text/plain'})
    res.end("Hay NH The server is running")
})

// start the server 

server.listen(3000 , () =>{
    console.log("the server is listening on port 3000")
})