//print palindrome numbers in a given range
var fr=1;
var to=1000;
for(let j=fr;j<=to;j++)
{
var res=0;
var rem;
for(let i=j;i>0;i=parseInt(i/10))
{
     rem=i%10;
    res=res*10+rem;
}
if(j==res)
console.log(j+" is Palindrome");
}