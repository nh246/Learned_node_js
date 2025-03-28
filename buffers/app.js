// file enccoding and decoding process

import fs from "fs";

// read files from fs module

fs.readFile("files/example.txt", (error, data) => {
    if (error) throw error;
    // console.log(data);

    const encoded = data.toString('base64');
    console.log(encoded)

    fs.writeFile("files/output.txt", encoded, (error) => {
        if (error) throw error;
        console.log("The file has been saved");
    });

    const decoded = Buffer.from(encoded, 'base64').toString();
    console.log(decoded)
}); 