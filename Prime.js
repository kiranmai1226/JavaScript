//print whether number is prime or not
var x=20;
for(let i=2;i<x;i++)
{
    var isprime=true;
    if(x%i==0)
    {
    isprime=false;
    break;
    }
}
if(isprime)
console.log(x+" is prime");
else
console.log(x+" is not prime");