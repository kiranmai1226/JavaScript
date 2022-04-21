//Prime or not
var val=7;
var i=1;
var count=0;
while(i<=val)
{
    if(val%i==0)
    count++;
    i++;
}
console.log((count==2)?"Prime":"Not Prime");