import _ from "lodash"

const number  = [1,2,3,4,5]

const double = _.map(number , (num) => num * 2)

console.log("The result :", double)