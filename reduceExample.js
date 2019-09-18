const array = [1,2,3,4];

const result= array.reduce((acc, val) => acc + val)

const a = [[1,2],[3,4,12],[5,6,33]];

const output = a.reduce((acc,val)=>{
    return acc.concat(val);
},[])

const t = [12.50, 3.84, 2.97];
const tr= t.reduce((acc,val,i,arr)=>{
    acc +=val;
  return  i==arr.length-1 ? acc/arr.length : acc;
})

const p = [
{
    id: 1,
    total:1,
    fk:100
},
{
    id: 2,
    total:2,
    fk:100
},
{
    id: 3,
    total:3,
    fk:100
},
{
    id: 4,
    total:4,
    fk:100
},
{
    id: 5,
    total:5,
    fk:100
},
{
    id: 6,
    total:6,
    fk:100
},
{
    id: 7,
    total:7,
    fk:100
},
{
    id: 8,
    total:8,
    fk:100
}]
const pr = p.reduce((acc,val,i,arr)=>{
    acc.fk=val.fk;
    acc.total += val.total;
     if (i == arr.length-1) {
        acc.ave = acc.total/arr.length
     }
    return acc;
},{total:0,fk:0,ave:0});

console.log(pr);