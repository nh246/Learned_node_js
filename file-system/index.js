import { readFile } from "node:fs";
import { writeFile } from "node:fs";

// read text from a file
readFile("files/example.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

// write text from a file
const content = "hello world";

writeFile("files/message.txt", content, (error) => {
  if (error) throw error;
  console.log("The file has been saved");
});



