//rightangle triangle
var row=8;
var coloum=8;
var string="";
for(let i=1;i<=row;i++)
{
    for(let j=0;j<i;j++){
    string+="*";
    }
    string+="\n";
}
console.log(string);