const ask = require("./ask")

async function askQuestion(question) {
    const result = await ask(question);
    console.log('Promise 1:', result.response);
    const result2 = await ask(question);
    console.log('Promise 2:', result2.response);
}

askQuestion("Why is Gamora?")