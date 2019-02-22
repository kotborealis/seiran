module.exports = ({console = console}) => ({
    print: (args) => console.log(...args),
    sqrt: a => Math.sqrt(a)
});