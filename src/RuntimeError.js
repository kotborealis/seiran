module.exports = function(text){
    return new Error(`Runtime error: ${text}`);
};