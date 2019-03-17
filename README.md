# Seiran

🚀🌙 Simple lua-like language interpreter built using antlr4

[Online REPL (hosted on Github pages)](https://kotborealis.github.io/seiran/)

![Screenshot](./Screenshot.png)

## Implemented

* Statements:
    * global/local variables
    * global/local functions
    * function call
    * break
    * while - do
    * if - then - else - if - end
    * for - do - end
* Expressions:
    * nil, true, false
    * number
    * string
    * function expression (lambda)
    * tableconstruct
    * power operator
    * unary operators
    * mul/div operators
    * add/sub operators
    * comparison operators
    * and/or operators
    
## Build executable

To build executables for linux-x64, windows-x86 and windows-x64, run
`npm run pkg`.

Built executables are located in `./build/` directory.

## Build webapp

To build and deploy webapp, run `npm run depliy`.