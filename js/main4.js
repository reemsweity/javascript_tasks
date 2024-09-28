//1
let x="";
for(let i=1;i<=10;i++){
    x=x+i+" "
}
console.log(x);

//2
let y=""
let i=1;
while(i<=10){
    y=y+i+" "
    i++
}
console.log(y);
//3
let u= [1, 2, 3, 4, 5];
let h=""
for(let i=0;i<u.length;i++){
    h=h+u[i]+" "
}
console.log(h);
//4
let r=""
for(let i=0;i<=10;i++){
    if(i%2==0){
r=r+i+" "
    }
}
console.log(r);

//5
let sum=0;
for(let i=0;i<=10;i++){
    sum=sum+i
}
console.log(sum);
//6
let arra1=[1, 2, 3, 4, 5];
let d
for(let i=0;i<arra1.length;i++){
if(arra1[i]=Math.max(...arra1)){
    d=arra1[i]
}
}
console.log(d);
//7
let e
let arra2=[1, 2, 3, 4, 5]
for(let i=0;i<arra2.length;i++){
    if(arra2[i]=Math.min(...arra2)){
      e=arra2[i]
    }
    }
    console.log(e);

//8
let arr3=[1, 2, 3, 4, 5];
let avg=0
for(let i=0;i<arr3.length;i++){
    avg=avg+arr3[i] 
  }  
  avg=avg/arr3.length
console.log(avg);

//9 
let m=1;
let s=5
if(s>1){
    for(let i=1;i<=s;i++){
        m=m*i;
    }
}
console.log(m);

//10
let limit = 10;
let a = 0, b = 1;
let r3 = a + " " + b + " ";  
for (let i = 2; ; i++) {  
  let next = a + b;
  if (next > limit) break;  
  r3 += next + " ";     
  a = b;  
  b = next;
}

console.log(r3);

//11
let lim = 20;
let r4 = "";

for (let i = 2; i <= lim; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    r4 += i + " ";
  }
}

console.log(r4);


//12
let num2=5
let v=0
for(let i=1 ;i<=10;i++){
    v=v+" "+i*num2
}
console.log(v);
//13
let arrd=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let k=""
for(let i=0;i<arrd.length;i++){
    for(let j=0;j<arrd[i].length;j++){
       k=k+" "+arrd[i][j]
    }
}
console.log(k);
//14
let arr4=[1,2,3,4,5]
let n=""
for(let i=arr4.length-1;i>=0;i--){
n=n+" "+arr4[i]
}
console.log(n);
//15
let arr5=[1, 2, 3, 4, 5]
let r1=2;
let r2=4;
let range=""
for(let i=r1;i<=r2;i++){
range=range+" "+arr5[i]
}
console.log(range);

//16

let arr = [1, 2, 3, 4, 5];
let step = 2;
let o=""

for (let i = 0; i < arr.length; i += step) {
 o=o+" "+arr[i]
}
console.log(o);

//17
let arr7=[1,2,3,4,5]
let num3=4
let result=false
for(let i=0;i<arr7.length;i++){
    if(num3==arr7[i]){
        result=true;
        break;
    }}
    
console.log(result);
//18
let arr8=[1, 2, 1, 3, 2, 1]
let frequency=0
let num5=1
for(let i=0;i<arr8.length;i++){
if(num5==arr8[i])
frequency=frequency+1
}
console.log(frequency);