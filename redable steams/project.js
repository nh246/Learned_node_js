import fs from "fs";

// create redable and writeable streams

const source = fs.createReadStream("files/largefile.txt", )

const destination = fs.createWriteStream("files/copy-largefile.txt" )

let totalBytes = 0

source.on("data", (chunk) => {
    totalBytes += chunk.length
    console.log(`Copied ${totalBytes} bytes`);
})

// pipe the readable stream to the writeable stream

source.pipe(destination)

source.on("end", () => {
    console.log("Done copying the file");
});