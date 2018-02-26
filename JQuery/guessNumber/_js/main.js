$(document).ready(function(){
	
	var desafio = Math.floor((Math.random() * 100));
	
	var valorMinimo = 0;
	var valorMaximo = 100;
	var palpite;

	$('#btnPalpite').click(function(){
		palpite = $('#inputPalpite').val();
		verificaLimites();
	});

	function verificaLimites(){

		if (isNaN(palpite) || palpite < valorMinimo || palpite > valorMaximo) {
			alert("Palpite: (" + palpite + ") inválido! - Só entre " + valorMinimo + " e " + valorMaximo);
		}else if(palpite == desafio){
			alert("Parabéns!! Você Ganhou!");
			location.reload();
			return;
		}else if (palpite > desafio) {
			valorMaximo = palpite;
		}else {
			valorMinimo = palpite;
		}

		$('#lblMgs').text("Digite um número entre " + valorMinimo + " e " + valorMaximo);
	}
});