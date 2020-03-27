let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
};

let john = {
    surname: 'Watson',
    address: sherlock.address
};

john.surname = 'Lennon';
john.address.city = 'Malibu';

console.log(sherlock.surname);//'Holmes'
console.log(sherlock.address.city);//'Malibu'
console.log(john.surname);//'Lennon'
console.log(john.address.city);//'Malibu'