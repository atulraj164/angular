let message="hello type script"
console.log(message);

//datatypes
let val2=76;//auto detect tyoe type infrence
const a:number=55;
let val:number|boolean|String=44;//union type 
val=true;
val="hello";
console.log(a);

let user={
     name:"singh",
     age:97
};
console.log(user.age);
console.log(user.name);

//arrays

let pricearray:number[]=[233,3345,5,646,343];
console.log(pricearray);
pricearray.push(994);
pricearray.push(344);
pricearray.push(6777);


pricearray.forEach(element => {
    console.log(element);
});
console.log(pricearray.pop());
