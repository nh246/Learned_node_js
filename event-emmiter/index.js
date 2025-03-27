import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter()

eventEmitter.on('start' , (num1 , num2) => {

    const result = num1 + num2
    console.log(`The sum of those numbers are : ${result}`)
})

eventEmitter.emit('start' , 5 ,10)
