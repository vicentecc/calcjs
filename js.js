//limpar o tela da calculadora
function limpar(){
	document.getElementById('tela').value='';
}

//jogar o numero na tela
function jogarnum(num){
	var conca = document.getElementById('tela').value;
	document.getElementById('tela').value = conca + num;
}

// calcular oque esta na tela com as operações básicas + - * /
function calcular(){
	var td= document.querySelector("#tela").value;	
	total = eval(td);
	
	if(total==24)
		document.querySelector("#tela").value='tu = viado';
		else
		document.querySelector("#tela").value=total;
}

//factorial
function factorial(){
	var numt = document.getElementById('tela').value;
	if ((numt == 0) || (numt == 1))

		document.querySelector("#tela").value = 1;

			else
				var result = numt;
				for (cont = numt; cont > 1; cont--){
				result = result * (cont-1);
				}
				document.getElementById('tela').value = result;
}

//porcentagem
function porcento(){
	var div = document.getElementById('tela').value;
	var numt = document.getElementById('tela').value= div/100;
}

//raiz quadrada
function raiz(){
	var r = Math.sqrt(document.getElementById('tela').value);
	document.getElementById('tela').value = r ;
}

//potência
function potencia(){
	var p = Math.pow(document.getElementById('tela').value,2);
	document.getElementById('tela').value = p ;
}