/* 
-Crea un array composto da 10 automobili.

-Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
*/

const cars = [{
    carBrand: 'audi',
    model: 'tt',
    fuels: 'benzina',
}, {
    carBrand: 'audi',
    model: 'r8',
    fuels: 'benzina',
}, {
    carBrand: 'audi',
    model: 'q3',
    fuels: 'diesel',
}, {
    carBrand: 'ford',
    model: 'fiesta',
    fuels: 'benzina',
}, {
    carBrand: 'ford',
    model: 'mustung',
    fuels: 'benzina',
}, {
    carBrand: 'bmw',
    model: 'i3',
    fuels: 'elettricità',
}, {
    carBrand: 'bmw',
    model: 'i1',
    fuels: 'elettricità',
}, {
    carBrand: 'volkswagen',
    model: 'polo',
    fuels: 'benzina',
}, {
    carBrand: 'volkswagen',
    model: 'golf',
    fuels: 'diesel',
}, {
    carBrand: 'volkswagen',
    model: 'id.4',
    fuels: 'elettricità',
}];

/* Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

/* const resultBenzina = cars.filter(car => car.fuels == `benzina`);
const resultDiesel = cars.filter(car => car.fuels == `diesel`);
const resultOther = cars.filter(car => car.fuels !== `diesel` && car.fuels !== `benzina`); */

const resultBenzina = cars.filter(element => {
    if (element.fuels === `benzina`) {
        return true
    }
    return false
})

const resultDiesel = cars.filter(element => {
    if (element.fuels === `diesel`) {
        return true
    }
    return false
})

const resultOther = cars.filter(element => {
    if (element.fuels !== `benzina` && element.fuels !== `diesel`) {
        return true
    }
    return false
})

document.getSelection(``)


console.log(resultBenzina);
console.log(resultDiesel);
console.log(resultOther);