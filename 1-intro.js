/**
 * Using Global Variables in Node.js
 *
 * GLOBALS - NO WINDOW!!!
 *
 * - DASH
 * _ underscore
 *
 * __dirname   - path to current directory
 * __filename  - file name
 * require     - function to use current modules (CommonJS)
 * module      - info about current module (file)
 * process     - info about env where the program is being executed
 *
 */

console.log(__dirname) // C:\Users\swayt\WebstormProjects\node-express
// Через каждую секунду выводит сообщение Ctrl+C для остановки программы
setInterval(() => { // callback function - функция обратного вызова
    console.log('hello world') // clear для очистки окна
}, 1000)