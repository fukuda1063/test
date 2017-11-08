exports.greet = function(name) {
    return "Hello,"+ name;
}

exports.greetAsync = function(name,callback) {
    let greet = "Hello,"+ name;
    callback(greet);
}
