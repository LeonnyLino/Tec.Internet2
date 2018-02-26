$(document).ready(function(){
	$('#table').hide();

	var jogadorX = 'x';
	var jogadorO = 'o';

	var jogardoDaVez = jogadorX;
	var tabuleiro = new Array(9);
	var campoPreenchido = 0;

	$('#btnIniciar').click(function(){
		$('#table').show();
	});

	/*Verifica se o tabuleiro está completamente preenchido, se estiver, significa que ninguém venceu a rodada*/
	function verificaTabuleiro() {
		for(var i = 0; i < tabuleiro.length; i++){
			if(tabuleiro[i] != undefined) {
				campoPreenchido++;
			}
		}
		return campoPreenchido === tabuleiro.length;
	}

	/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas linhas do tabuleiro, procurando um vencedor*/
	function verificaTabuleiroInLine() {
		for( var i = 0; i < 9; i += 3) {
			if ( tabuleiro[i] === 'x' && tabuleiro[i + 1] ==='x' && tabuleiro[i + 2] === 'x' ) {
				console.log("entrou xlinha");
				alert ('( X ) venceu');
				
			}
			if ( tabuleiro[i] ==='o' && tabuleiro[i + 1] === 'o' && tabuleiro[i + 2] === 'o' ) {
				console.log("entrou olinha");
				alert ('( O ) venceu');
				
			}
		}
	}

	/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas colunas do tabuleiro, procurando um vencedor*/
	function verificaTabuleiroInColumn() {
		for( var i = 0; i < 7; i++) {
			if ( tabuleiro[i] === 'x' && tabuleiro[i + 3] === 'x' && tabuleiro[i + 6] === 'x' ) { 
				console.log("entrou Xcolumn");
				alert('( X ) venceu');
				
			}
			if ( tabuleiro[i] === 'o' && tabuleiro[i + 3] === 'o' && tabuleiro[i + 6] === 'o' ) {
				console.log("entrou Ocolumn");
				alert('( O ) venceu');
				
			}
		}
	}

	/*Verifica a existência de ocorrências de um mesmo elemento(X ou O) nas diagonais do tabuleiro, procurando um vencedor*/
	function verificaTabuleiroInDiagonal() {
		if ( (tabuleiro[0] === "x" && tabuleiro[4] === "x" && tabuleiro[8] === "x") ||
			 (tabuleiro[2] === "x" && tabuleiro[4] === "x" && tabuleiro[6] === "x")) {
			console.log("entrou xdiagonal");
				alert('( X ) venceu');
				
			} else if ( (tabuleiro[0] == "o" && tabuleiro[4] == "o" && tabuleiro[8] == "o") ||
					    (tabuleiro[2] == "o" && tabuleiro[4] == "o" && tabuleiro[6] == "o") ) {
				console.log("entrou odiagonal");
				alert ('( O ) venceu');
				
			} 
		}

		
		$('td').click(function(){

			if($(this).text() === ""){
				$(this).text(jogardoDaVez);

				(jogardoDaVez === jogadorX) ? jogardoDaVez = jogadorO: jogardoDaVez = jogadorX;
			}else {
				alert("Este campo ja foi marcado!");
			}
		});

		verificaTabuleiroInLine();
		verificaTabuleiroInColumn();
		verificaTabuleiroInDiagonal();

		if(verificaTabuleiro()){
			alert("Nenhum vencedor! - Clique em [OK] para próxima partida!");
		}
		
		console.log(campoPreenchido);
		

});