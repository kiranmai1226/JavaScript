//fibinocci series
var j=2;
var fib=[];
    fib[0]=0;
    fib[1]=1;

do
{
fib[j]=fib[j-1]+fib[j-2];
j++;
}while(j<10)
var i=0;
while(i<10)
{
    console.log(fib[i]);
    i++;
}


