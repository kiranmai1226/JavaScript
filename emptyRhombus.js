//Print Empty Rhombus
var num=9;
var string="";
for(var i=1;i<=num;i++)
{
for(var j=0;j<num-i;j++)
{
    string+=" ";
}
for(j=1;j<2*i;j++)
{
    if(j==1 || j==(2*i-1))
    string+="*";
    else
    string+=" ";
}
string+="\n";
}
for(var i=1;i<=num-1;i++)
{
for(var j=0;j<i;j++)
{
    string+=" ";
}
for(j=2*(num-i)-1;j>=1;j--)
{
    if(j==1 || j==(2*(num-i)-1))
    string+="*";
    else
    string+=" ";
}
string+="\n";

}
console.log(string); 