var buttons=document.querySelectorAll(".calculator span");
var decimal=false;
var equal=false;
var operators = ['+', '-', 'x', '÷'];
for(var i=0;i<buttons.length;i++)
  {
    buttons[i].onclick=function(e)
    { var display=document.querySelector(".screen");
      var btnvalue=this.innerHTML;
      if(equal)
      {
        display.innerHTML='';
        equal=false;
      }
      var scrnvalue=display.innerHTML;
      
      if(btnvalue=='C')
        {
          display.innerHTML= '';
          decimal=false;
        }
      else if(btnvalue=='=')
        {
          var equation=scrnvalue;
          var lastcharacter=equation[equation.length-1];
          equation=equation.replace(/x/g,'*');
          equation=equation.replace(/÷/g,'/');
          if(operators.indexOf(lastcharacter)!=-1 || lastcharacter=='.')
            {
              equation=equation.replace(/.$/,'');
            }
          if(equation)
            {
              display.innerHTML=eval(equation);
              decimal=false;
              equal=true;
            }
          
        }
     else if(operators.indexOf(btnvalue)!=-1)
       { 
         var lastchar=scrnvalue[scrnvalue.length-1];
         if(operators.indexOf(lastchar)==-1 && scrnvalue!='' && lastchar!='.')
           {
             display.innerHTML+=btnvalue;
           }
         else if(btnvalue=='-' && scrnvalue=='')
           {
             display.innerHTML+=btnvalue;
           }
         else if(operators.indexOf(lastchar)!=-1 && scrnvalue.length>1)
           {
             display.innerHTML=scrnvalue.replace(/.$/,btnvalue);
           }
         decimal=false;
       }
      else if(btnvalue=='.')
        {
          if(!decimal)
            {
              display.innerHTML+=btnvalue;
              decimal=true;
            }
        }
      else
        {
          display.innerHTML+=btnvalue;
        }
      e.preventDefault();
    };
  }