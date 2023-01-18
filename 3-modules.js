// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // the sum is: 24

sayHi('susan') // Hello there susan
sayHi(names.john) // Hello there john
sayHi(names.peter) // Hello there peter


// const { john, peter } = require('./4-names')
// console.log(data) // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
// console.log(names)
// console.log(sayHi)
// sayHi(john)
// sayHi(peter)