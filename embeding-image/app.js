import fs, { readFile } from "fs";

// read iamge files and embadded image into html file

fs,readFile("images/bgc.png", (error, data) => {
    if (error) throw error;
    // console.log(data)

    // convert data to base 64 

    const base64 = data.toString("base64");
    // console.log(base64)

    // data: [mime-type];base64,[data]

    const imgsrc = `data:image/png;base64,${base64}`;

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container" id="cont1">
            <h3>This is my heading</h3> 
            <img src="${imgsrc}" alt="bgc">
        </div>
    </body>
    </html>
    `;

    fs.writeFile("index.html", html, (error) => {
        if (error) throw error;
        console.log("The file has been saved");
    });
})



