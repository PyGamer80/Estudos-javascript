let comparaComthis = function(param){
    console.log(this === param)
}
comparaComthis(globalThis)

const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(globalThis)
comparaComthis(obj)

let comparaComthisArrow = param => console.log(this === param)
comparaComthisArrow(globalThis)
comparaComthisArrow(module.exports)

comparaComthisArrow = comparaComthisArrow.bind(obj)
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)