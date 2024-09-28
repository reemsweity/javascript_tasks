//1
let obj1= {name: "Adam", age: 25, gender: "male" }; 
console.log(obj1.name+" "+obj1.age+" "+obj1.gender);
//2
let obj2={name: "Adam", age: 25 }
obj2. gender="male"
console.log(obj2); 
//3
let obj3={name: "Adam", age: 25 }
obj3["gender"]="male"
console.log(obj3);
//4
console.log(obj2.name);
//5
console.log(obj2["name"]);

//6
let obj4={ name: "Adam", age: 25, gender: "male" }; 
let text=""
for (let x in obj4) {
   
    text +=x +":"+ obj4[x] + " ";
  };
  console.log(text);
  //7
  
  let keys=Object.keys(obj4)
  console.log(keys);
  //8
  let values=Object.values(obj4)
  console.log(values);
  //9
  let entries=Object.entries(obj4)
  console.log(entries);
  //10
  let obj5={name: "Adam", age: 25 }
  let obj6= {gender: "male" }
  console.log(Object.assign(obj5,obj6));
  //11

let obj7={name: "Adam", age: 25 }
console.log(Object.freeze(obj7));
//12
let obj8={name: "Adam", age: 25 }
Object.seal(obj8)

