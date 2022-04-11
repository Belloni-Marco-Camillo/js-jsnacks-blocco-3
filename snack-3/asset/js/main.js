const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];


/* const resultMammiferi = animals.filter(animal => animal.classe == `mammiferi`); */

const resultMammiferi = animals.filter(element => {
    if (element.classe == `mammiferi`) {
        return true
    }
    return false
})

console.log(resultMammiferi);