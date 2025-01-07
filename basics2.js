//*******ASSIGNMENT OPERATORS******

var w=10;
document.write(w);
document.write("<br>");
w+=4;
document.write(w);
document.write("<br>");
w*=2;
document.write(w);

//COMPARISON OPERATORS

var a=5;
var b=5;
document.write(a==b);//checks only values
document.write("<br>");
document.write(a!=b);
document.write("<br>");
document.write(a===b);//checks if dataype and valuevare same
document.write("<br>");

//LOGICAL OPERATORS

var a=10;
var b=20;
document.write(a==10 && b==20);
document.write("<br>");
b=30;
document.write(a==10 || b==20);
document.write("<br>");
document.write(!(b==30));
document.write("<br>");
//IF ELSE STATEMENT
var a=101;
if(a%2==0){
document.write("even");
}
else{
    document.write("odd");
}


//SWITCH 

var a=150;
switch(a)
{
case 150:
    document.write("yes");
    break;
 case 10:
    document.write("helo");
    break; 
default:
    document.write("trig");
    break;  
}


//LOOP

for(var a=1;a<=8;a++)
{
    document.write(a+" b" +"<br>");
}


var c=5;
while(c<10)
{
    document.write(c+"<br>");
    c++;
}


