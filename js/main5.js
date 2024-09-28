//1
let arr1 = [1, 2, 3, 4, 5];

arr1.forEach(num1 => {
  console.log(num1);
});

//2
let arr2=[1,2,3,4,5]
console.log(arr2.map(num2=>num2*2));

//3
let arr3=[1,2,3,4,5]

console.log(arr3.filter(num3=>!(num3%2)));
//4
let arr4=[1,2,3,4,5]
console.log(arr4.reduce((a,b) => a + b));
//5
let arr5=["apple","cherry", "banana"];
console.log(arr5.sort());
//6
console.log(arr5.reverse());
//7
let arr6=[1, 2, 3]
let arr7=[4, 5, 6]
console.log(arr6.concat(arr7));

//8
let arr8=[1, 2, 3, 4, 5, 6]
console.log(arr8.slice(0,2).concat(arr8.slice(4,6)));
//9
let arr9=[1, 2, 3, 4, 5]
console.log(arr9.splice(1,1));
//10
let arr10=[1, 2, 3, 4, 5]
console.log(arr10.indexOf(4));
//11
let arr11=[1, 2, 3, 4, 5]
console.log(arr11.join(" "));
//12
let arr12="1, 2, 3, 4, 5"
console.log(arr12.split(","));
//13
let arr13 = [1, 2, 3, 4, 5];

let length = arr13.length;
console.log(length); 

//14
let arr14=[1,2,3,4,5,6]
let newarr14=""
for(let i=0;i<arr14.length;i++){
    newarr14=newarr14+" "+arr14[i];
}
console.log(newarr14);
//15
for(let i=0;i<arr14.length;i++){
    console.log(i);
}

//16
let arr16=[1,2,3,4,5,6]

console.log(Array.isArray(arr16));
//17
let obj={0: "a", 1: "b", 2: "c", length: 3}
arr17=Array.from(obj)
console.log(arr17);

//18
console.log(Array.of(1,2,3));
//19
let arr19=[1,2,3,4,5,6].fill(0,0,3)
console.log(arr19);
//20
let arr20 = [1, 2, 3, 4, 5];
arr20.copyWithin(0,1,2)
arr20.copyWithin(1, 0, 1)
arr20.copyWithin(2, 0, 1)


console.log(arr20);
