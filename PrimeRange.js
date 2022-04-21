//print prime numbers in a given range
var fr=1;
var to=100;
for(let i=fr;i<=to;i++)
{
    var isprime=true;
    if(i==1)
    isprime=false;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            isprime=false;
            break;
        }
    }
    if(isprime)
    console.log(i);
}