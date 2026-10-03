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


/*
3. Object Literals
A comma-separated list of zero or more key-value pairs, enclosed in curly braces ({}).
javascript
const user = {
  name: "Bob",
  age: 30
};*/

//class


class User{
    name:String;
    id:Number ;

  constructor(id:number,name:String,){
      this.name=name;
      this.id=id;
  }
 
    userinfo():void{//method
      console.log(`user name is ${this.name}\n user id is ${this.id}`)
    }
}

let user1=new User(1,"ranvijay singh");

let user2=new User(21,"jaikant");




pricearray.forEach(element => {
    console.log(element);
});
console.log(pricearray.pop());
/*
3. Object Literals
A comma-separated list of zero or more key-value pairs, enclosed in curly braces ({}).
javascript
const user = {
  name: "Bob",
  age: 30
};*/
//class
class User {
    name;
    id;
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    userinfo() {
        console.log(`user name is ${this.name}\n user id is ${this.id}`);
    }
}
let user1 = new User(1, "ranvijay singh");
let user2 = new User(21, "jaikant");

