const console = require("csstree-validator/cjs/reporter/console.cjs")

function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log(`This is a returned function`)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log(`Tthis return an anonymous function`)
    }
}