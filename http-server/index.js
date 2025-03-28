import http from "http"



// import http from "http";

// // create a server 

// const server = http.createServer( (req , res) => {
   
//     // sent response herder
//     res.writeHead(200 , {'content-type': 'text/html'})

//     // send response 
//     res.end("Nodemon server ")
// })

// // start the server

// const port = 3000
// server.listen(port , () => {
//     console.log(`Server running at http://localhost:${port}`)
// })

//  create a server

const server = http.createServer( (req , res) => {

    console.log("This the method: ",req.method)

    // herder 
    res.writeHead(200 , {'content-type': "text/plain"})

    // send response
    // res.end("Hellow from the server")

    // handle request based on request method

    if(req.method === "GET"){
        res.end("You have requested a GET")
    }
    else if(req.method === "POST"){
        res.end("You have requested a POST")
    }
    else if(req.method === "PUT"){
        res.end("You have requested a PUT")
    }
    else {
        res.hasHeader(404 ,{'content-type': "text/plain"})
        res.end("404 no request found")
    }
})

// define the port 

const port = 3000


// start the server

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
