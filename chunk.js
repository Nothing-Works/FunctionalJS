const hugeArray = Array.from({length: 76},(_,i) => i);

function chunk(hugeArray, chunkSize = 10) {
    return Array.from(
        {length: Math.ceil(hugeArray.length/chunkSize)},
        (_,i) => {
            const start = chunkSize * i;
            return hugeArray.slice(start, start + chunkSize);
        }
    );
}

console.log(chunk(hugeArray));

const { 0:first , length:len, [len-1]:last } = [0,1,2,3,4,5,6,7,8,9];
console.log({first,last});