import http from "http";

const server = http.createServer((req, res) => {

    const {url} = req

    console.log(url)

    res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.end("Hello World")

    // basic routing 

    if (url === "/") {
        res.end("Home Page")
    } else if (url === "/about") {
        res.end("About Page")
    }

    else {
        res.end("404 Page Not Found")
    }

})

// start the server

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})