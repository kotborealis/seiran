module.exports = ({print_fn = console.log.bind(console)}) => ({
    print: (args) => print_fn(...args),
    sqrt: a => Math.sqrt(a)
});