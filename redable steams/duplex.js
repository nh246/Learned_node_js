import { Duplex } from 'stream'

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(`Writing chunk: ${chunk.toString()}`);
        callback();
    },
    read() {
        this.push('hello from duplex \n');
        this.push('this is second chunk \n');
        this.push(null);
    }
}) 

duplexStream.on('data', (chunk) => {
    console.log(`Reveived Chunk: ${chunk.toString()}`);
});

duplexStream.write("This is the first chunk. \n")

duplexStream.end("Write the end")