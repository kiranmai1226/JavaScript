//print fibinocci nimbres in  a range
var r=10;
let fib=[];
fib[0]=0;
fib[1]=1;
for(let i=2;i<r;i++)
{
    fib[i]=fib[i-1]+fib[i-2];
}
for(let j=0;j<r;j++)
console.log(fib[j]);