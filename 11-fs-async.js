const { readFile, writeFile } = require('fs')
console.log('start')
// Callback
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result) // Hello this is first text file
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting the next one')