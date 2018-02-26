<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>

<center>
	<fieldset>
		<label>Digite um número entre 0 e 100</label>
	</fieldset>
	<br/>
	<form action="leonny.php">
		<input type="number" name="inputPalpite" max="100" min="0">
		<button type="submit">Palpite</button>
	</form>
	<br/><br/>
</center>

<?php
	session_start();

	if(isset($_GET['inputPalpite'])){
		verificaNUm();
		echo '<p> num: '. $_SESSION['numRandom'];

	}else {
		numRandom();

		echo '<p> num: '. $_SESSION['numRandom'];

	}

	function numRandom(){
		$_SESSION['numRandom'] = rand(0, 100);
		$_SESSION['valorMinimo'] = 0;
		$_SESSION['valorMaximo'] = 100;
		$_SESSION['a'] = 0;
		$_SESSION['b'] = 1;
		$_SESSION['c'] = 0;
		$_SESSION['x'] = 0;
	}

	function verificaNUm(){
		$entrada = $_GET['inputPalpite'];
		if($entrada == $_SESSION['numRandom']){
			echo "Ok! vc ganhou. <br/> sua pontuação foi: ". $_SESSION['erros'];
		}else if($entrada < $_SESSION['numRandom']){
			$_SESSION['valorMinimo'] = $entrada;
		}else {
			$_SESSION['valorMaximo'] = $entrada;
		}

		echo '<p>Digite um valor entre: '. $_SESSION['valorMinimo']. ' e ' .$_SESSION['valorMaximo'].'</p>';
		
		
		if($entrada != $_SESSION['numRandom']){
			$_SESSION['c'] = $_SESSION['a'] + $_SESSION['b'];

			echo '<p>Pontos de Erros: '. $_SESSION['c']. '</p>';

			$_SESSION['a'] = $_SESSION['b'];
			$_SESSION['b'] = $_SESSION['c'];
			

		}

	}

?>

</body>
</html>