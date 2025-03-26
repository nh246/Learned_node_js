import os from 'os'

console.log("cpu architecture: ",os.arch())
console.log("logical cpu core: ",os.cpus())
console.log("System mememory: ",os.totalmem() / (1024 * 1024 * 1024))