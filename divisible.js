// Divisible by 3 and 6 but not 5
var i=1;
do
{
    if((i%3==0 || i%6==0) && (i%5!=0))
    console.log(i);
    i++;
}while(i<=200)