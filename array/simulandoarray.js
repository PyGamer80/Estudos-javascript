const quaseArray = {0:'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    Enumerable: false
})
console.log(quaseArray[0])

meuArray = ['Rafael', 'Ana', 'Bia']
console.log(meuArray[0])