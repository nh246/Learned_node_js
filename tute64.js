const fs = require("fs");
let text = fs.readFileSync("pele.txt", "utf-8");
text = text.replace("legend", "KING");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("gogo.txt", text);
