const spreadsheet = {title: 'Sales'}
const copy = spreadsheet
copy.title = copy.title + '(Copy)'

console.log(spreadsheet.title);

let batman= {
    address: {city: 'Gotham'}
}

let robin = {
    address: batman.address
}

batman.address = {city: 'Ibiza'}

console.log(robin.address.city);

let chip = {
    address: {city: 'Disneyland'}
}

let dale = {
    address: {
        city: chip.address.city
    }
}

chip.address = {
    city: 'Tokyo'
}

console.log(dale.address.city);

let ilana = {
    address: {city: 'New York'}
}

let place = ilana.address

place = { city: 'Boulder'}

let abbi = {
    address: place
}

console.log(ilana.address.city);

let rick = {
    address: {city: 'C-137'}
}

let morty = {
    address: rick.address
}

rick.address = {city: '35C'}

console.log(morty.address.city);

let daria = {
    address: {city: 'Lawndale'}
}

let place1 = daria.address

place1.city = 'L.A'

let jane = {
    address: place
}

console.log(daria.address.city);

let walter = {
    address: {city: 'Albuquerque'}
}

let gustavo = {
    address: walter.address
}

walter = {
    address: {city: 'Crawford'}
}

console.log(gustavo.address.city);

let dipper = {
    address: {
        city: {
            name: 'Gravity Falls'
        }
    }
}

let mabel = {
    address: dipper.address
}

dipper.address.city = {
    name: 'Land of Ooo'
}

console.log(mabel.address.city.name);