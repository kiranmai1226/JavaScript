//in given range print values divisible by 4 not by 5
var low=10;
var high=100;
for(let i=low;i<=high;i++)
{
    if((i%4==0) && (i%5!=0))
    console.log(i);
}