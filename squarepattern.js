//square pattern
var row=5;
var coloum=9;
var string="";
for(let i=0;i<row;i++)
{
    for(let j=0;j<coloum;j++)
        {
        string+="* ";
        }
        string+="\n";
}
console.log(string);