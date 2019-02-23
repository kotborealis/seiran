#! /usr/bin/env node

const args = require('chen.js').args();
const interactive = args.i || args.interactive;
const lua = new (require('../lib/index'));

if(!interactive){
    const file = args._[0] || 0;
    const input = require('fs').readFileSync(file, "utf-8");
    lua.evaluate(input);
}
else{
    const readline = require('async-readline');
    const {line}= new readline({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    (async () => {
        let chunk = await line();
        while(chunk){
            try{
                const stat = `print(${chunk})`;
                const tree = lua.compile(stat, true);
                lua.evaluate(stat, tree);
            }
            catch(e){
                lua.evaluate(chunk);
            }
            chunk = await line();
        }
    })();
}