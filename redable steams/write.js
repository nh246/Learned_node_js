import fs from "fs";

const writableStream = fs.createWriteStream("files/output.txt");


// writing data in chunks

writableStream.write("This is the first chunk. \n")
writableStream.write("This is the 2nd chunk. \n")
writableStream.write("This is the 3rd chunk. \n")
writableStream.write("This is the 4th chunk. \n")

writableStream.end("This is the last chunk. \n")

writableStream.on("finish", () => {
    console.log("Done writing the file");
});