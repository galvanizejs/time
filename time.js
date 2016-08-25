function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();

m=checkTime(m);
s=checkTime(s);
newHour=convertTime(h);
document.getElementById('clock').innerHTML=newHour+":"+m+":"+s;
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function convertTime(x) 
{
  if (x>12) 
  {  
  x=x-12;
  }
  if (x == 0) 
  {
   x= 12;  
  }
  return x;
}

startTime();