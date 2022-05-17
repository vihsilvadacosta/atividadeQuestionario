var certos=0;
var erros=0;

function id(){
    var nome=window.prompt("Identifique-se por favor","Digite seu nome");
    var mail=window.prompt("Digite seu e-mail","E-mail");
    document.formulario.txtnome.value=nome.toUpperCase();
    document.formulario.txtmail.value=mail.toLowerCase();
	  document.formulario.txtnome.disabled=true;
    document.formulario.txtmail.disabled=true;
    document.formulario.BTENVIAR.disabled=true;
	  document.formulario.txtcertos.disable=true;
	  document.formulario.txterros.disable=true;
}

function Enviar(){
	alert("Resultados Enviados");
}


function verifica1(rec){
  if (rec==1){
    certos++;
    
  }
  else{
    erros++;
  }
  document.formulario.op1.disabled=true;
  document.formulario.op2.disabled=true;
  document.formulario.op3.disabled=true;
  document.formulario.op4.disabled=true;
}


function verifica2(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
   
  }
  document.formulario.op5.disabled=true;
  document.formulario.op6.disabled=true;
  document.formulario.op7.disabled=true;
  document.formulario.op8.disabled=true;
}

function verifica3(rec){
   if (rec==1){
     certos++;
   }
   else{
     erros++;
   
   }
   document.formulario.op9.disabled=true;
   document.formulario.op10.disabled=true;
   document.formulario.op11.disabled=true;
   document.formulario.op12.disabled=true;
}
function verifica4(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op13.disabled=true;
  document.formulario.op14.disabled=true;
  document.formulario.op15.disabled=true;
  document.formulario.op16.disabled=true;
}
function verifica5(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op17.disabled=true;
  document.formulario.op18.disabled=true;
  document.formulario.op19.disabled=true;
  document.formulario.op20.disabled=true;
}
   
function verifica6(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op21.disabled=true;
  document.formulario.op22.disabled=true;
  document.formulario.op23.disabled=true;
  document.formulario.op24.disabled=true;
}
function verifica7(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op25.disabled=true;
  document.formulario.op26.disabled=true;
  document.formulario.op27.disabled=true;
  document.formulario.op28.disabled=true;
}
function verifica8(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op29.disabled=true;
  document.formulario.op30.disabled=true;
  document.formulario.op31.disabled=true;
  document.formulario.op32.disabled=true;
}
function verifica9(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op33.disabled=true;
  document.formulario.op34.disabled=true;
  document.formulario.op35.disabled=true;
  document.formulario.op36.disabled=true;
}
function verifica10(rec){
  if (rec==1){
    certos++;
  }
  else{
    erros++;
  
  }
  document.formulario.op37.disabled=true;
  document.formulario.op38.disabled=true;
  document.formulario.op39.disabled=true;
  document.formulario.op40.disabled=true;
  document.formulario.txtnome.disabled=false;
  document.formulario.txtmail.disabled=false;
  document.formulario.BTENVIAR.disabled=false;
  document.formulario.txtcertos.disable=false;
  document.formulario.txterros.disable=false;
  document.formulario.txtcertos.value=certos;
  document.formulario.txterros.value=erros;

}

