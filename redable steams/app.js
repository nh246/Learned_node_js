import fs from "fs";

// tradionaly read data from a file

// fs.readFile("files/largefile.txt", "utf-8", (error, data) => {
//     if (error) throw error;
//     console.log(data.length + " bytes read");
// });

// streaming to read data from a file

const redableStream = fs.createReadStream("files/largefile.txt", {
    encoding: "utf-8",
    highWaterMark: 1024,
});

redableStream.on("data", (chunk) => {
    console.log(`Reveived Chunk: ${chunk.length} bytes`);
});