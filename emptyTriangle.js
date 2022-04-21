//Print Empty Traingle
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
            if(i==1 ||i==num)
            string+="*";
            else{
            if(j==1||j==(2*i-1))
        string+="*";
        else
        string+=" ";
            }
        }
    
    string+="\n";
}
console.log(string);