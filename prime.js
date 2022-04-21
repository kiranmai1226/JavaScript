//Prime numbres in range
var i;
var j=2;
while(j<=100)
{
var count=0;
i=1;
while(i<=j)
{
if(j%i==0)
count++;
i++;
}
if(count==2)
console.log("prime : "+j);
j++;
}