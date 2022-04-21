//rightangle triangle
var row=8;
var coloum=8;
var string='';
for(let i=1;i<=row;i++)
{
    for(var j=0;j<coloum-i;j++)
        string+=" ";
    for(;j<coloum;j++)
    string+="*";
    string+="\n";
}
console.log(string);