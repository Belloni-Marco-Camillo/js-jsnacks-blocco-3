const names = ['MarcO', 'GIOVANni', 'LoRenzo'];

const lower = names.map(element => {
    return element.toLowerCase();
});

console.log(lower);

const FUpper = lower.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1);
});

console.log(FUpper);