// importing buffer

const buffer = Buffer.from("hellow World", "utf-8");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.length);

// encoding buffer

const bufferUtf8 = Buffer.from("hellow", "utf-8");

console.log(bufferUtf8);

// cconverting buffer in base64

const bufferBase64 = bufferUtf8.toString("base64");

console.log(bufferBase64);

// decoding buffer

const bufferDecoded = Buffer.from(bufferBase64, "base64");

console.log(bufferDecoded);
