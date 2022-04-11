/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */
const drivers = [{
        driverName: `marco`,
        driverSecondName: `belloni`,
        driverAge: 29
    },
    {
        driverName: `pinco`,
        driverSecondName: `pallino`,
        driverAge: 16
    },
    {
        driverName: `tizio`,
        driverSecondName: `caio`,
        driverAge: 89
    },
];

/* let canDrive = drivers.filter(driver =>
    if (driver.age > 18) {
        return true;
    }
    return false
);
console.log(canDrive); */

const canDrive = drivers.filter(driver => { if (driver.driverAge > 18 && driver.driverAge < 80) return driver })

canDrive.forEach(element => {
    console.log(`${element.driverName} ${element.driverSecondName} può guidare`);
});

console.log(canDrive);