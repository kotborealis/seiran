#! /usr/bin/env node

const args = require('chen.js').args();
const interactive = args.i || args.interactive;
const help = args.h || args.help;
const lua = new (require('../lib/index'));

if(help){
    let bin = process.pkg ? process.argv[0] : `${process.argv[0]} ${process.argv[1]}`;

    console.log(`Lua-like language interpreter`);
    console.log(`Usage:`);
    console.log(`* Execute file: ${bin} < script.lua`);
    console.log(`* REPL: ${bin} -i`);
    console.log(`* Help: ${bin} -h`);
    return;
}

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

    const {line, prompt} = rl;

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