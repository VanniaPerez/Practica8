function sumar(){
    var num1;
    num1=document.calc.txtnumero1.value;
    var num2;
    num2=document.calc.txtnumero2.value;
    var opc;
    opc= eval(num1) + eval(num2);
    document.calc.resultado.value=opc;
    alert("El resultado de es:"+ opc);
}
function Resta(){
    var num1;
    num1=document.calc.txtnumero1.value;
    var num2;
    num2=document.calc.txtnumero2.value;
    var opc1;
    opc1=eval(num1) - eval(num2);
    document.calc.resultado1.value=opc1;
    alert("El resultado de es:"+ opc1);
}
function Multiplicacion(){
    var num1;
    num1=document.calc.txtnumero1.value;
    var num2;
    num2=document.calc.txtnumero2.value;
    var opc2;
    opc2=eval(num1) * eval(num2);
    document.calc.resultado2.value=opc2;
    alert("El resultado de es:" + opc2);
}
function Divicion(){
    var num1;
    num1=document.calc.txtnumero1.value;
    var num2;
    num2=document.calc.txtnumero2.value;
    var opc3;
    opc3=eval(num1) / eval(num2);
    document.calc.resultado3.value=opc3;
    alert("El resultado de es:"+ opc3);
}
