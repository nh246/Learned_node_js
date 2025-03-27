import fs from "fs";

// create a readable stream

const readableStream = fs.createReadStream("files/largefile.txt", {
  encoding: "utf-8",
  highWaterMark: 1024,
});

readableStream.on("data", (chunk) => {
  console.log(`Reveived Chunk: ${chunk.length} bytes`);
});

readableStream.on("end", () => {
  console.log("Done reading the file");
});
