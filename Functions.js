//declare a function
//this function will be hoisted
function func(x,y) {
    return x+y;
}
//function expressions
//Anonymous
const a= function(x,y){
    return x+y;
}
//arrow
const b= (x,y)=>{
    return x+y;
}
//arrow with implict return
const b1= (x,y)=> x+y
//named
const c= function sum(x,y){
    return x+y;
}
//IIFE
const d= (function(x,y) {
    return x+y;
})(1,2);

//invoke a function
const e= func(1,2);
const e1=new func(1,2);
const e2=func.call(null,1,2);
const e3=func.apply(null,[1,2]);

const andy= {
    name: 'andy',
    age:30
}

function displayName(text) {
    return `${text} ${this.name}`;
}

console.log(displayName.call(andy,'hello'));