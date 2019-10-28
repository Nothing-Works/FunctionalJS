const slices = [
    [1,2,3],
    [2,3,3,3],
    [3,4],
    [5],
    [1,1,1,1,1,1,2,2]
]

const initialValue={
    shortest:null,
    longest:[]
}

const longestAndShortest = (acc,cur) => {
    const temShortest = acc.shortest ? acc.shortest.length : Number.MAX_VALUE;

     return {
         shortest: temShortest < cur.length ? acc.shortest : cur,
         longest: acc.longest.length > cur.length ? acc.shortest : cur,
     }
};

const longest = (acc ,cur) => (acc.length>cur.length)? acc: cur;
const shortest = (acc ,cur) => (acc.length<cur.length)? acc: cur;

const a= slices.reduce(longest);
const b= slices.reduce(shortest);
const c= slices.reduce(longestAndShortest,initialValue);
console.table(a);
console.table(b);
console.table(c);

//deconstructing
const {0:first,length:len,[len-1]:last} = [1,2,3,4,5,6];
console.log(len);
console.log(first);
console.log(last);