// declare a variable called a and set it to 10.
let a = 10;
// declare a variable called b and set it to a. so b is 10.
let b = a;
// set a to 0.
a = 0;
//so a is 0, b is 10.
console.log(a); //0;
console.log(b); //10;

let originalString = 'andy';
let modifiedString = originalString + 'song';
console.log(originalString);
console.log(modifiedString);

const original = {
    cells : 1,
    author : 'andy',
    metadata: {
        title : 'foo',
        times : 2,
    }
}

const copy = {
    cells : original.cells,
    author : original.author,
    metadataNew : {...original.metadata, title : original.metadata.title},
    metadataOld : original.metadata
}

copy.metadataOld.title = 'will change original title'
copy.metadataNew.title = 'will not change title'

copy.cells = 2;
copy.author = 'song'

console.log(original);
console.log(copy);