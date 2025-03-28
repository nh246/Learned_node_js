import http from "http";

const server = http.createServer((req, res) => {

    const {url} = req

    console.log(url)

    res.writeHead(200 , {'Content-Type' : 'text/plain'})
    // res.end("Hello World")

    if(url === "/") {
        res.end("Welcome toHome Page")
    } else if (url === "/blogs") {
        res.end("blogs Page")
    } 
    else if (url.startsWith("/blogs/")) {
        // console.log(url.split("/")[2])
        const postId = url.split("/")[2]
        res.end(`Your blog post: ${postId}`)

    } 
    else {
        res.end("404 Page Not Found")   
    }
    
})



const port = 3000

server.listen(port , () => {

    console.log(`Server running at http://localhost:${port}`)
})