module.exports = ({writer = console.log.bind(console)}) => ({
    print: (args) => writer(...args),
    sqrt: a => Math.sqrt(a)
});