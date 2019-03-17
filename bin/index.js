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
    const rl = new readline({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.setPrompt('> ');

    const {line, prompt, write} = rl;

    (async () => {
        console.log("-- Welcome to Lua-like language interpreter REPL");
        prompt();
        let chunk = await line();
        while(chunk){
            try{
                const stat = `print(${chunk})`;
                const tree = lua.compile(stat, true);
                lua.evaluate(stat, tree);
            }
            catch(e){
                try{
                    lua.evaluate(chunk);
                }
                catch(e){
                    console.error(e);
                }
            }
            prompt();
            chunk = await line();
        }
    })();
}