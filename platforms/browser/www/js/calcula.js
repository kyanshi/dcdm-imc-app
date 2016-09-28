//var calculo=document.calc;

//calculo.onclick=function () {
function calcular() {
	var form=document.calculoIMC;
	var nome=form.name.value;
	var altura=form.height.value;
	var peso=Number(form.weight.value);
	
	if(altura.indexOf(',')>-1) {
		//o indexOf devolve a posição de determinado caractere 
		//(procura, por exemplo, na string, onde está aquilo que queremos
		//encontrar e devolve a posição em que encontra).
		
		altura=altura.replace(',','.');
		//o replace substitui o que o indexOf procurou por algo que definimos.
	}

	altura=Number(altura);
	
	var imc=peso/Math.pow(altura,2);
	//a Math.pow faz as potências, de acordo com o expoente que definimos.

	imc=imc.toFixed(2);
	//delimita o número de casas decimais a apresentar, segundo o valor que 
	//definirmos, e procede ao respectivo arredondamento.

	var resultado=nome+", o seu IMC é "+imc;

	if (imc<18.5){
		resultado+="<br>Você encontra-se abaixo do peso recomendado!";
	}
	else if (imc<25) {
		resultado+="<br>Você está no peso ideal.";
	}
	else if (imc<30) {
		resultado+="<br>Você está com excesso de peso.";
	}
	else if (imc<35) {
		resultado+="<br>Você está com obesidade grau I";
	}
	else if (imc<40) {
		resultado+="<br>Você está com obesidade grau II";
	}
	else {
		resultado+="<br>Você já não deve caber nas portas...";
	}

	document.getElementById('results').innerHTML=resultado;
}