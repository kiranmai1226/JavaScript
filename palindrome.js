//number is palindrome or not
var x=1221;
var res=0;
for(let i=x;i>0;i=parseInt(i/10))
{
    var rem=i%10;
    res=res*10+rem;
}
if(x==res)
console.log("Palindrome");
else
console.log("Not Palindrome");
