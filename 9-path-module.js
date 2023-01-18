const path = require('path')

console.log(path.sep) // \

const filePath = path.join('/content', 'subfolder', 'test.ext') // normal path
// const filePath = path.join('/content/', 'subfolder', 'test.ext') // remove /
console.log(filePath) // \content\subfolder\test.ext

const base = path.basename(filePath)
console.log(base) // test.ext

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute) // C:\Users\swayt\WebstormProjects\node-express\content\subfolder\test.txt
