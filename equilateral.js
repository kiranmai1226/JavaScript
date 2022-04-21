//Print equilateral Triangle
var num=9;
var string="";
for(let i=1;i<=num;i++)
{
    
        for(var j=0;j<num-i;j++)
        {
        string+=" ";
        }
        for(j=1;j<(2*i);j++)
        {
        string+="*";
        }
    
    string+="\n";
}
console.log(string);