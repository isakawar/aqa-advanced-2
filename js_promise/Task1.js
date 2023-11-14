const text = "Text"
const timeDelay = 1000

function delayText(text, milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text)
        }, milliseconds)
    })
}

delayText(text,timeDelay).then(r => console.log(r))
